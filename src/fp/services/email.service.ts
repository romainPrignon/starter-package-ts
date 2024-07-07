import { mayAsync } from "@romainprignon/std/fp/functions/mayAsync.js"
import * as emailEffect from "../effects/email.effect.js"
import { Err } from "@romainprignon/std/_internal/error/Error.js"
import { raise } from "@romainprignon/std/fp/functions"

export const send = async (arg: {to: string, content: string}): Promise<boolean | Err> => {
  return mayAsync<boolean, Err>(
    async () => {
      return emailEffect.send({to: arg.to, content: arg.content})
    },
    (err: Err) => {
      return err.code === 'ERR_SEND_EMAIL' ? err : raise(err)
    }
  )
}
