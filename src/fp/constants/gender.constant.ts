// overly simplified 🙏
export const genders = {
  male: 'male',
  femele: 'femele'
} as const

export type Genders = keyof typeof genders
