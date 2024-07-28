import { ReadonlyDeep } from 'type-fest'
import * as z from 'zod'

export abstract class Entity<S extends Zod.Schema> {
  async from(e: z.infer<S>): Promise<ReadonlyDeep<z.infer<S>>> {
    return Object.freeze({
      ...e
    })
  }
}

// const WSchema = z.object({
//   foo: z.number(),
// })
// const XSchema = z.object({
//   bar: z.string(),
// })

// const YSchema = z.object({
//   qux: z.boolean(),
// })
// type YSchema = typeof WSchema & typeof XSchema & typeof YSchema

// class WEntity extends Entity<typeof WSchema> {}
// class XEntity extends WEntity {
//   async from(e: z.infer<typeof XSchema & typeof WSchema>): Promise<ReadonlyDeep<z.infer<typeof XSchema & typeof WSchema>>> {
//     return {
//       ...await super.from(e),
//       bar: e.bar
//     }
//   }
// }
// class YEntity extends Entity<YSchema> {}

// export const W = new WEntity()
// export const X = new XEntity()
// export const Y = new YEntity()


// const a = await W.from({foo: 1})
// const b = await X.from({foo: 1, bar: '1'})
// const c = await Y.from({foo: 1, bar: '1', qux: true})
