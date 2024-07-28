import * as z from 'zod'
import { isValid } from 'date-fns'
import { ReadonlyDeep } from 'type-fest'
import { InvariantError } from '../errors/errors.js'

export const birthSchema = z.date()

export class Birth extends Date {
  static async from(birthLike: Birth): Promise<ReadonlyDeep<Birth>> {
    if (!isValid(birthLike)) throw new InvariantError(`invalid birthdate ${birthLike}`)

    return birthLike
  }
}

// remove
// Birth.from(new Date())
