import * as z from 'zod'
import { isValid } from 'date-fns/fp'
import { ReadonlyDeep } from 'type-fest'
import { raise } from '@romainprignon/std/fp/functions'
import { InvariantError } from '../errors/errors.js'

export const birthSchema = z.date()

export type Birth = z.infer<typeof birthSchema>

export const birth = async (birthLike: Birth): Promise<ReadonlyDeep<Birth>> => {
  if (!isValid(birthLike)) raise(InvariantError(`invalid birthdate ${birthLike}`))

  return birthLike
}
