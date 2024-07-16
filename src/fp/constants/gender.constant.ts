import * as z from 'zod'

// overly simplified 🙏
export const genders = {
  male: 'male',
  femele: 'femele'
} as const

export const gendersSchema = z.enum([genders.male, genders.femele])
export type Genders = z.infer<typeof gendersSchema>
