import { Immutable } from 'immer'

import { Num } from './utils/Num'


const naturalNumberGenerator = {
  until (n: number): Immutable<Array<number>> {
    // tslint:disable-next-line: no-array-mutation
    return Array(n).fill(0).map((_, i) => i + 1)
  }
}

const sumOfMultiple3and5Until = (n: number): Immutable<number> =>
  naturalNumberGenerator
    .until(n)
    .filter((val) => Num(val).isMultipleOf(5) || Num(val).isMultipleOf(3))
    .reduce((acc = 0, val) => acc + val)


export {
  sumOfMultiple3and5Until
}
