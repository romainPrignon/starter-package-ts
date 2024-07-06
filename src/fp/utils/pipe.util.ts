// TODO: put this in std
type PipeFunction<A, B> = (input: A) => B

type ApplyFunctions<A, F extends Array<PipeFunction<any, any>>> =
  F extends [] ? A :
  F extends [infer FN extends PipeFunction<any, any>, ...infer Rest extends Array<PipeFunction<any, any>>] ?
  ApplyFunctions<ReturnType<FN>, Rest> :
  never

export function pipe<A, F extends Array<PipeFunction<any, any>>>(value: A, ...fns: F): ApplyFunctions<A, F> {
  return fns.reduce((acc, fn) => fn(acc), value) as any
}
