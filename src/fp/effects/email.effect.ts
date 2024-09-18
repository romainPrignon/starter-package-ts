import { may, raise } from '@romainprignon/std/fp/functions'
import { Either, Err, Res } from '../../err.js'


export const send = async (arg: {to: string, content: string}): Promise<Either<boolean>> => {
  if (Math.random() < 0.5) {
      return Err(new Error('boom'))
  }
  console.log(`sending to ${arg.to} content ${arg.content} via email`)
  return Res(true)
}
