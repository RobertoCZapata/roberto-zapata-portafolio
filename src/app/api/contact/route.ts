import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { sendContactEmail } from '@/lib/email/resend';
import { contactFormSchema } from '@/lib/utils/validation';

/**
 * Rate limiting map to prevent spam
 * Stores email addresses and their last submission timestamp
 */
const rateLimitMap = new Map<string, number>();

// Rate limit configuration: 1 email per 60 seconds per email address
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 60 seconds

/**
 * POST /api/contact
 *
 * Handles contact form submissions
 *
 * @param request - Next.js request object containing form data
 * @returns JSON response with success/error status
 *
 * Response Codes:
 * - 200: Email sent successfully
 * - 400: Validation error (invalid form data)
 * - 429: Rate limit exceeded (too many requests)
 * - 500: Server error (email sending failed)
 *
 * @example
 * ```typescript
 * const response = await fetch('/api/contact', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({
 *     name: 'John Doe',
 *     email: 'john@example.com',
 *     subject: 'Job Inquiry',
 *     message: 'Hello...'
 *   })
 * });
 *
 * const data = await response.json();
 * if (response.ok) {
 *   console.log('Email sent!', data.id);
 * }
 * ```
 */
export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate form data against schema
    const validatedData = contactFormSchema.parse(body);

    // Check rate limit
    const now = Date.now();
    const lastSubmission = rateLimitMap.get(validatedData.email);

    if (lastSubmission && now - lastSubmission < RATE_LIMIT_WINDOW_MS) {
      const remainingTime = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - lastSubmission)) / 1000);

      return NextResponse.json(
        {
          error: 'Too many requests',
          message: `Por favor espera ${remainingTime} segundos antes de enviar otro mensaje.`,
          retryAfter: remainingTime,
        },
        { status: 429 }
      );
    }

    // Send email via Resend
    const result = await sendContactEmail(validatedData);

    // Update rate limit map
    rateLimitMap.set(validatedData.email, now);

    // Clean up old entries from rate limit map (older than 5 minutes)
    const fiveMinutesAgo = now - 5 * 60 * 1000;
    for (const [email, timestamp] of rateLimitMap.entries()) {
      if (timestamp < fiveMinutesAgo) {
        rateLimitMap.delete(email);
      }
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: '¡Mensaje enviado exitosamente! Te responderé pronto.',
        id: result.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form API error:', error);

    // Handle Zod validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          message: 'Los datos del formulario son inválidos.',
          details: error.errors.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Handle email sending errors
    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: 'Email sending failed',
          message: error.message || 'No se pudo enviar el email. Por favor intenta de nuevo más tarde.',
        },
        { status: 500 }
      );
    }

    // Handle unexpected errors
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'Ocurrió un error inesperado. Por favor intenta de nuevo más tarde.',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 *
 * Returns API information (method not allowed for actual contact submission)
 */
export async function GET() {
  return NextResponse.json(
    {
      name: 'Contact API',
      version: '1.0.0',
      description: 'Portfolio contact form submission endpoint',
      method: 'POST',
      requiredFields: ['name', 'email', 'subject', 'message'],
      rateLimit: `1 request per ${RATE_LIMIT_WINDOW_MS / 1000} seconds per email`,
    },
    { status: 200 }
  );
}
