import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  course: z.string().min(1, 'Please select a course'),
  city: z.string().min(2, 'Please enter your city').max(100),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
