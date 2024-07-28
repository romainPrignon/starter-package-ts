import { beforeEach, describe, test, vi, expect } from 'vitest'
import * as emailEffect from './email.effect.js'
import { EmailEffect } from './email.effect.js'

beforeEach(() => {
  vi.restoreAllMocks()
})

describe('EmailEffect', () => {
  describe('send', () => {
    test('it should send an email', async () => {
      // arrange
      const to = 'Bob'
      const content = 'content'

      // mock
      const console = {
        log: vi.fn(() => {})
      } as unknown as Console
      const math = {
        random: () => 0.6
      } as Math

      // act
      return new EmailEffect(math, console)
        .send({ to, content })
        .then(() => {
          // assert
          expect(console.log).to.toHaveBeenCalledWith(`sending to ${to} content ${content} via email`)
        })
    })

    test('it should fail to send an email', async () => {
      // arrange
      const to = 'Alice'
      const content = 'another content'

      // mock
      const console = {
        log: () => {}
      } as Console
      const math = {
        random: () => 0.4
      } as Math

      // act
      const res = new EmailEffect(math, console).send({ to, content })

      // assert
      await expect(res).rejects.toThrowErrorMatchingInlineSnapshot('[Error: fail to send Email]')
    })
  })
})
