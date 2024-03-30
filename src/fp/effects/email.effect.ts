// import { Error } from '@romainprignon/utils/fp/errors'
// import { may } from '@romainprignon/utils/fp/functions'
// import { raise } from '../utils/raise.util.js' // mettre dans utils
// import { createEffect } from 'effector'

// // todo
// // revoir may pour etre en mode pipe try catch

// export const send = createEffect(async (arg: {to: string, content: string}): Promise<boolean> => {
//   return may(() => {
//     console.log(`sending to ${arg.to} content ${arg.content} via email`)
//     return true
//   },
//   (err) => raise(Error('fail to send Email', {
//     code: 'ERR_SEND_EMAIL',
//     cause: err
//     // context: { to, content } // todo
//   })))
// })
