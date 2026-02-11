import { Resend } from 'resend';
import type { ContactFormData } from '../utils/validation';

// Initialize Resend client with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send contact form email using Resend
 *
 * @param data - Validated contact form data
 * @returns Promise with Resend API response
 * @throws Error if email sending fails
 *
 * @example
 * ```typescript
 * try {
 *   const result = await sendContactEmail({
 *     name: 'John Doe',
 *     email: 'john@example.com',
 *     subject: 'Job Inquiry',
 *     message: 'I would like to discuss...'
 *   });
 *   console.log('Email sent:', result.id);
 * } catch (error) {
 *   console.error('Failed to send email:', error);
 * }
 * ```
 */
export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validate required environment variables
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      throw new Error('RESEND_FROM_EMAIL is not configured');
    }

    if (!process.env.RESEND_TO_EMAIL) {
      throw new Error('RESEND_TO_EMAIL is not configured');
    }

    // Send email using Resend API
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_TO_EMAIL,
      subject: `Portfolio Contact: ${data.subject}`,
      replyTo: data.email,
      html: generateEmailHTML(data),
      text: generateEmailPlainText(data),
    });

    return result;
  } catch (error) {
    console.error('Error sending email via Resend:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
}

/**
 * Generate HTML email template
 *
 * @param data - Contact form data
 * @returns Formatted HTML string
 */
function generateEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo mensaje de contacto</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          padding: 30px 20px;
          border-radius: 10px 10px 0 0;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .content {
          background: #f9fafb;
          padding: 30px 20px;
          border-radius: 0 0 10px 10px;
        }
        .field {
          margin-bottom: 20px;
          background: white;
          padding: 15px;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .label {
          font-weight: 600;
          color: #1e293b;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        .value {
          color: #475569;
          font-size: 16px;
          word-wrap: break-word;
        }
        .message-value {
          white-space: pre-wrap;
          line-height: 1.8;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
          color: #64748b;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>📧 Nuevo mensaje de contacto</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Recibido desde tu portafolio</p>
      </div>

      <div class="content">
        <div class="field">
          <div class="label">👤 Nombre</div>
          <div class="value">${escapeHTML(data.name)}</div>
        </div>

        <div class="field">
          <div class="label">📧 Email</div>
          <div class="value">
            <a href="mailto:${escapeHTML(data.email)}" style="color: #3b82f6; text-decoration: none;">
              ${escapeHTML(data.email)}
            </a>
          </div>
        </div>

        <div class="field">
          <div class="label">📝 Asunto</div>
          <div class="value">${escapeHTML(data.subject)}</div>
        </div>

        <div class="field">
          <div class="label">💬 Mensaje</div>
          <div class="value message-value">${escapeHTML(data.message)}</div>
        </div>

        <div class="footer">
          <p>Este mensaje fue enviado desde el formulario de contacto de <strong>roberto-zapata.dev</strong></p>
          <p style="margin-top: 10px;">
            <a href="mailto:${escapeHTML(data.email)}?subject=Re: ${escapeHTML(data.subject)}"
               style="color: #3b82f6; text-decoration: none; font-weight: 600;">
              Responder ✉️
            </a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Generate plain text email version
 *
 * @param data - Contact form data
 * @returns Formatted plain text string
 */
function generateEmailPlainText(data: ContactFormData): string {
  return `
NUEVO MENSAJE DE CONTACTO
═══════════════════════════════

Nombre: ${data.name}
Email: ${data.email}
Asunto: ${data.subject}

Mensaje:
${data.message}

───────────────────────────────
Este mensaje fue enviado desde el formulario de contacto de roberto-zapata.dev
Responder a: ${data.email}
  `.trim();
}

/**
 * Escape HTML special characters to prevent XSS
 *
 * @param unsafe - Unescaped string
 * @returns HTML-safe string
 */
function escapeHTML(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
