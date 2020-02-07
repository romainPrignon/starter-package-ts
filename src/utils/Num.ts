const Num = (value?: any) => ({
  ...Number,
  isMultipleOf (divisor: number): boolean {
    return Number(value) % divisor === 0
  }
})

// tslint:disable-next-line: no-object-mutation
Num.from = (val: number) => Num(val)


export {
  Num
}
