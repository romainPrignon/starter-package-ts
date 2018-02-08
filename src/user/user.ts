import { User } from '../../type/index'

import * as _ from 'lodash'

export const sortUserByAge = (users: User[]): User[] =>
  _(users)
    .sortBy((user: User): number => user.age)
    .value()

// export const getUserOrderTotalPrice = async (user: User): Promise<number> =>
//   _(user.orders)
//     .reduce(
//       async (acc: number, o: Order): Promise<number> => await 1,
//       0
//     )

export const addUsersAgeCategory = (users: User[]): User[] =>
  users
    .map((user: User) => ({
      ...user,
      category: user.age < 50 ? 'young' : 'old'
    }))
