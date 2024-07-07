import { Err } from '@romainprignon/std/fp/errors/index.js'
import { may, raise } from '@romainprignon/std/fp/functions/index.js'
import { createEffect } from 'effector'


export const send = createEffect(async (arg: {to: string, content: string}): Promise<boolean> => {
  return may(() => {
    if (Math.random() < 0.5) {
      raise(Err('boom'))
    }
    console.log(`sending to ${arg.to} content ${arg.content} via email`)
    return true
  },
  (err) => raise(Err('fail to send Email', {
    code: 'ERR_SEND_EMAIL',
    cause: err,
    context: { to: arg.to, content: arg.content }
  })))
})
