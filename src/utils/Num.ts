const Num = (val: number) => ({
  ...Number,
  isMultipleOf (divisor: number): boolean {
    return val % divisor === 0
  }
})

// tslint:disable-next-line: no-object-mutation
Num.of = (val: number) => Num(val)


export default Num
