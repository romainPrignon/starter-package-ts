// import { beforeEach, describe, test, vi, expect } from 'vitest'
// import * as emailEffect from './email.effect.js'

// beforeEach(() => {
//   vi.restoreAllMocks()
// })

// describe('emailEffect', () => {
//   describe('send', () => {
//     test('it should send an email', () => {
//       // arrange
//       const to = 'Bob'
//       const content = 'content'

//       // mock
//       vi.spyOn(console, 'log').mockImplementation(() => {})

//       // act
//       emailEffect.send({ to, content }).then(() => {
//         // assert
//         expect(console.log).to.toHaveBeenCalledWith(`sending to ${to} content ${content} via email`)
//       })
//     })

//     test('it should send an email', () => {
//       // arrange
//       const to = 'Alice'
//       const content = 'another content'

//       // mock
//       vi.spyOn(console, 'log').mockImplementation(() => {})

//       // act
//       emailEffect.send({ to, content }).then(
//         // assert
//         () => expect(console.log).to.toHaveBeenCalledWith(`sending to ${to} content ${content} via email`)
//       )
//     })

//     test('it should fail to send an email', () => {
//       // arrange
//       const to = 'Alice'
//       const content = 'another content'
//       const err = new Error('Boom')

//       // mock
//       vi.spyOn(console, 'log').mockImplementation(() => { throw err })

//       // act
//       const res = emailEffect.send({ to, content })

//       // assert
//       expect(res).rejects.toMatchObject({
//         message: 'fail to send Email',
//         code: 'ERR_SEND_EMAIL',
//         cause: err
//       })
//     })
//   })
// })
