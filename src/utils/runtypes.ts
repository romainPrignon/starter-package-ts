import is from '@sindresorhus/is'
import * as r from 'runtypes'


const Promise = <R extends r.Runtype>(runtype: R) =>
  r.Guard((val: any): val is Promise<r.Static<R>> =>
    is.promise(val)
  )

export * from 'runtypes'
export {
  Promise
}
