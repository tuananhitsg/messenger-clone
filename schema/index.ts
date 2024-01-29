import * as z from 'zod'

export const formSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email(),
  name: z.string().optional(),
  password: z.string().min(1, { message: 'Email is required' }).min(8, {
    message: 'Password must be at least 8 characters',
  }),
})
