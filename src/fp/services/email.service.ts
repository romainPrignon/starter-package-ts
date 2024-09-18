import { mayAsync } from '@romainprignon/std/fp/functions/mayAsync.js'
import * as emailEffect from '../effects/email.effect.js'
import { Err } from '@romainprignon/std/_internal/error/Error.js'
import { raise } from '@romainprignon/std/fp/functions'
import { Either } from '../../err.js'

export const send = async (arg: {to: string, content: string}): Promise<Either<boolean>> => {
  return emailEffect.send({ to: arg.to, content: arg.content })
  // return mayAsync<boolean, Err>(
    // async () => {
      //
    // },
    // (err: Err) => {
      // return err.code === 'ERR_SEND_EMAIL' ? err : raise(err)
    // }
  // )
}
