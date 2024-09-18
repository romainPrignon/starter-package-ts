export type Either<T> = [err: Error | null, res: T | null]

export const Res = <T>(res: T) => [null, res] as Either<T>
export const Err = <T>(err: any) => [err, null] as Either<T>  // TODO: check err is error and throw
export const either = <T>([err, res]: [err: any, res: T]) => [err, res] as Either<T>
export const mapRes = <T, U>(fn: (t: T) => U) => ([err, res]: Either<T>): Either<U> => {
  return err ? Err(err) : Res(fn(res!))
}

export const random = (): Either<number> => {
  const n = Math.random()
  if (n < 0.4) {
    return [new Error('boom'), null]
  } else {
    return [null, n]
  }
}

const main = () => {
  let [err, res] = random()
  if (err) {
    // throw err (le plus souvent)
    // return err (aussi souvent)
    res = 1 // attribuer une valeur par default au res
  }
  const num = res! + 1

  return num
}

// console.log(main())
