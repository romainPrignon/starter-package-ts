import { Immutable } from 'immer'
import { Number } from '@romainprignon/utils/native/numbers'


const naturalNumberGenerator = {
  until (n: number): Immutable<Array<number>> {
    // tslint:disable-next-line: no-array-mutation
    return Array(n).fill(0).map((_, i) => i + 1)
  }
}

const sumOfMultiple3and5Until = (n: number): Immutable<number> =>
  naturalNumberGenerator
    .until(n)
    .filter((val) => new Number(val).isMultipleOf(5) || new Number(val).isMultipleOf(3))
    .reduce((acc, val) => acc + val)


export {
  sumOfMultiple3and5Until
}
