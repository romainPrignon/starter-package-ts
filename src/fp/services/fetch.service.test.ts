// import { describe, test, expect } from 'vitest'
// import { fetchAll } from './fetch.service.js'
// import { readFile } from '../effects/fs.effect.js'

// describe('fetchAll', () => {
//   test('it should return an empty list if content is empty', () => {
//     // arrange
//     const content = ''
//     const toEntity = async () => {}
//     const path = 'some-path'

//     // mock
//     readFile.use(async () => content)

//     // act
//     fetchAll(toEntity)(path)
//       .then(
//         // assert
//         res => expect(res).toEqual([])
//       )
//       .catch(err => { throw err })
//   })

//   test('it should return an empty list when there is an error while reading a file', () => {
//     // arrange
//     const toEntity = async () => {}
//     const path = 'some-path'

//     // mock
//     const err = new Error('boom')
//     readFile.use(async () => { throw err })

//     // act
//     fetchAll(toEntity)(path)
//       .then(
//         // assert
//         res => expect(res).toEqual([])
//       )
//       .catch(err => { throw err })
//   })

//   test('it should return a list of entity', () => {
//     // arrange
//     const toEntity = async ([a, b, c]: Array<string>) => ({ a, b, c })
//     const path = 'some-path'

//     // mock
//     readFile.use(async () => `alice,1991-01-01,femele
// bob,1992-01-01,male
// colin,1989-01-01,male
// `)

//     // act
//     fetchAll(toEntity)(path)
//       .then(
//         // assert
//         res => expect(res).toMatchInlineSnapshot(`
//             [
//               {
//                 "a": "alice",
//                 "b": "1991-01-01",
//                 "c": "femele",
//               },
//               {
//                 "a": "bob",
//                 "b": "1992-01-01",
//                 "c": "male",
//               },
//               {
//                 "a": "colin",
//                 "b": "1989-01-01",
//                 "c": "male",
//               },
//             ]
//           `)
//       ).catch(err => { throw err })
//   })
// })
