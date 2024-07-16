import { Genders, genders, gendersSchema } from '../constants/gender.constant.js'
import { match } from 'ts-pattern'
import { Err } from '@romainprignon/std/fp/errors'
import { raise } from '@romainprignon/std/fp/functions'

export const parseGender = async (genderLike: unknown): Promise<Genders> => gendersSchema.parseAsync(genderLike)

// unused. just to show how to use pattern matching
export const isGenderValid = async (gender: string): Promise<Genders> => {
  return match(gender)
    .with(genders.femele, () => genders.femele)
    .with(genders.male, () => genders.male)
    .otherwise(() => raise(Err(`gender not valid ${gender}`)))
}
