import * as _ from 'lodash';
export const sortUserByAge = (users) => _(users)
    .sortBy((user) => user.age)
    .value();
// export const getUserOrderTotalPrice = async (user: User): Promise<number> =>
//   _(user.orders)
//     .reduce(
//       async (acc: number, o: Order): Promise<number> => await 1,
//       0
//     )
export const addUsersAgeCategory = (users) => users
    .map((user) => (Object.assign({}, user, { category: user.age < 50 ? 'young' : 'old' })));
//# sourceMappingURL=user.js.map