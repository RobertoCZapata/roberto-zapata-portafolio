import { z } from 'zod';

/**
 * Contact form validation schema
 *
 * Validates all fields of the contact form with appropriate constraints:
 * - name: 2-100 characters
 * - email: valid email format
 * - subject: 5-200 characters
 * - message: 10-1000 characters
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres')
    .trim(),

  email: z
    .string()
    .email('Por favor ingresa un email válido')
    .toLowerCase()
    .trim(),

  subject: z
    .string()
    .min(5, 'El asunto debe tener al menos 5 caracteres')
    .max(200, 'El asunto no puede exceder 200 caracteres')
    .trim(),

  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede exceder 1000 caracteres')
    .trim(),
});

/**
 * TypeScript type inferred from the contact form schema
 * Use this type for type-safe form data handling
 */
export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Validation error messages in English
 * Use these when language is set to 'en'
 */
export const contactFormSchemaEN = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters')
    .trim(),

  email: z
    .string()
    .email('Please enter a valid email')
    .toLowerCase()
    .trim(),

  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject cannot exceed 200 characters')
    .trim(),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message cannot exceed 1000 characters')
    .trim(),
});
