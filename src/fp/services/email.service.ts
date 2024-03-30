// export class EmailService {
//   constructor (private emailState: EmailState) { }
//   send (arg: { to: string }) {
//     console.log(arg.to)
//     this.emailState.recordSendStatus({ id: 'uuid', sendStatus: 'SUCCESS' })
//   }
// }

// type SendStatus = 'SUCCESS' | 'ERROR'

// export class EmailState {
//   // could have been a map
//   private readonly sendStatusRecord: Array<{ id: string, sendStatus: SendStatus }> = []

//   private constructor (state) { }
//   static from (state?: EmailState) {
//     return new EmailState(state)
//   }

//   recordSendStatus (arg: { id: string, sendStatus: SendStatus }) {
//     this.sendStatusRecord.push(arg)
//     return EmailState.from({ ...this })
//   }
// }

// // faire la version fp
// const makeEmailService = (emailState: x) => ({
//   send (arg: { to: string }) {
//     console.log(arg.to)
//     // emailState.add.push({ id: 'uuid', sendStatus: 'SUCCESS' })
//     emailState.addSendStatusRecord({ id: 'uuid', sendStatus: 'SUCCESS' })
//   }
// })

// type Records = { id: string, sendStatus: SendStatus }
// type SendStatusRecord = ReadonlyArray<{ id: string, sendStatus: SendStatus }>
// type EmailState1 = {
//   readonly sendStatusRecord: SendStatusRecord
// }
// const emailState: EmailState1 = {
//   sendStatusRecord: []
// }

// const makeEmailState = (state: EmailState1) => ({
//   addSendStatusRecord (r: Records): SendStatusRecord {
//     return [...state.sendStatusRecord, r]
//   }
// })
// type x = ReturnType<typeof makeEmailState>

// makeEmailService(makeEmailState(emailState))
