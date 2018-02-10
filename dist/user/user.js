import * as _ from 'lodash';
import { computeOrderSumAsync, computeOrderSumObservable } from '../order/order';
export const sortUserByAge = (users) => _(users)
    .sortBy((user) => user.age)
    .value();
export const getUserOrderTotalPriceAsync = async (user) => computeOrderSumAsync(user.orders);
export const getUserOrderTotalPriceObservable = async (user) => new Promise((resolve) => computeOrderSumObservable(user.orders)
    .subscribe(((value) => resolve(value))));
export const addUsersAgeCategory = (users) => users
    .map((user) => (Object.assign({}, user, { category: user.age < 50 ? 'young' : 'old' })));
//# sourceMappingURL=user.js.map