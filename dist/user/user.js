import * as _ from 'lodash';
import { computeOrderSumAsync } from '../order/order';
export const sortUserByAge = (users) => _(users)
    .sortBy((user) => user.age)
    .value();
export const getUserOrderTotalPriceAsync = async (user) => computeOrderSumAsync(user.orders);
// export const getUserOrderTotalPriceObservable = async (user: User): Promise<number> =>
//   new Promise<number>((resolve) =>
//     computeOrderSumObservable(user.orders)
//       .subscribe(
//         ((value: number) => resolve(value))
//       )
//   )
export const addUsersAgeCategory = (users) => users
    .map((user) => (Object.assign({}, user, { category: user.age < 50 ? 'young' : 'old' })));
//# sourceMappingURL=user.js.map