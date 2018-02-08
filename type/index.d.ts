export type User = {
  age: number,
  orders: Order[],
  hair?: string
}

export type Order = {
  price: number
}
