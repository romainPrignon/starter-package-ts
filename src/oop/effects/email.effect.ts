import { Err } from '@romainprignon/std/oop/errors/index.js'

export class EmailEffect {
  constructor (private math: Math, private console: Console) {}

  async send(arg: {to: string, content: string}): Promise<boolean> {
    try {
      if (this.math.random() < 0.5) {
        throw new Err('boom')
      }
      this.console.log(`sending to ${arg.to} content ${arg.content} via email`)
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
