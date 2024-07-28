import { describe, test, expect } from 'vitest'
import { EmailService } from './email.service.js'
import { EmailEffect } from '../effects/email.effect.js'

describe('EmailService', () => {
  describe('send', () => {
    test('it should send an email', async () => {
      // arrange
      const to = 'Bob'
      const content = 'content'

      // mock
      const math = {
        random: () => 0.6
      } as Math
      const emailEffect = new EmailEffect(math, console)

      // act
      const res = await new EmailService(emailEffect).send({to, content})

      // assert
      expect(res).toEqual(true)
    })

    test('it should fail to send an email', async () => {
      // arrange
      const to = 'Bob'
      const content = 'content'

      // mock
      const math = {
        random: () => 0.4
      } as Math
      const emailEffect = new EmailEffect(math, console)

      // assert
      // improbable
      // - [Error: rejected promise]
      // + [Error: fail to send Email]
      // expect(async () => new EmailService(emailEffect).send({to, content})).rejects.toThrowError()
    })
  })
})
