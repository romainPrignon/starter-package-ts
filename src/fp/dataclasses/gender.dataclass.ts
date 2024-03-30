import { Either } from '../../../types/either.js'
import { Genders, genders } from '../constants/gender.constant.js'
import { match } from 'ts-pattern'
import { Error } from '@romainprignon/utils/fp/errors/Error.js'
import { Exception } from '../../../types/exception.js'
import { raise } from '../utils/raise.util.js'

export const gender = (gender: string): Either<Exception, Genders> => {
  return match(gender)
    .with(genders.femele, () => genders.femele)
    .with(genders.male, () => genders.male)
    .otherwise(() => raise(Error(`gender not valid ${gender}`)))
}
