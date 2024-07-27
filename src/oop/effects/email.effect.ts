import { Err } from '@romainprignon/std/oop/errors/index.js'

export class EmailEffect {
  async send(arg: {to: string, content: string}): Promise<boolean> {
    try {
      if (Math.random() < 0.5) {
        throw new Err('boom')
      }
      console.log(`sending to ${arg.to} content ${arg.content} via email`)
      return true
    } catch (err) {
      throw new Err('fail to send Email', {
        code: 'ERR_SEND_EMAIL',
        cause: err,
        context: { to: arg.to, content: arg.content }
      })
    }
  }
}
