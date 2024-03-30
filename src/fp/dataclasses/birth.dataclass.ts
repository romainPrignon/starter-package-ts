import { isValid } from 'date-fns/fp'
import { Error } from '@romainprignon/utils/fp/errors/Error.js'
import { Either } from '../../../types/either.js'
import { Exception } from '../../../types/exception.js'
import { raise } from '../utils/raise.util.js'

export type Birth = Date

export const birth = (birthdate: Date): Either<Exception, Birth> => {
  if (!isValid(birthdate)) raise(Error(`invalid birthdate ${birthdate}`))

  return birthdate
}
