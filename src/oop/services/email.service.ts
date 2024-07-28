import { Err } from '@romainprignon/std/oop/errors/index.js'
import { raise } from '@romainprignon/std/fp/functions/index.js'
import { EmailEffect } from '../effects/email.effect.js'

export class EmailService {
  constructor(private emailEffect: EmailEffect) {}

  async send(arg: {to: string, content: string}): Promise<boolean | Err> {
    return this.emailEffect
      .send({ to: arg.to, content: arg.content })
      .catch((err: Err) => {
        return err.code === 'ERR_SEND_EMAIL' ? err : raise(err)
      })
  }
}
