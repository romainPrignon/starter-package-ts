import * as _ from 'lodash'

import { User } from '../../type/index'

import { computeOrderSumAsync, computeOrderSumObservable } from '../order/order'

export const sortUserByAge = (users: User[]): User[] =>
  _(users)
    .sortBy((user: User): number => user.age)
    .value()

export const getUserOrderTotalPriceAsync = async (user: User): Promise<number> =>
  computeOrderSumAsync(user.orders)

export const getUserOrderTotalPriceObservable = async (user: User): Promise<number> =>
  new Promise<number>((resolve) =>
    computeOrderSumObservable(user.orders)
      .subscribe(
        ((value: number) => resolve(value))
      )
  )

export const addUsersAgeCategory = (users: User[]): User[] =>
  users
    .map((user: User) => ({
      ...user,
      category: user.age < 50 ? 'young' : 'old'
    }))
