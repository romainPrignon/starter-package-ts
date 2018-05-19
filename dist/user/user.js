"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const order_1 = require("../order/order");
exports.sortUserByAge = (users) => lodash_1.default(users)
    .sortBy((user) => user.age)
    .value();
exports.getUserOrderTotalPriceAsync = async (user) => order_1.computeOrderSumAsync(user.orders);
// export const getUserOrderTotalPriceObservable = async (user: User): Promise<number> =>
//   new Promise<number>((resolve) =>
//     computeOrderSumObservable(user.orders)
//       .subscribe(
//         ((value: number) => resolve(value))
//       )
//   )
exports.addUsersAgeCategory = (users) => users
    .map((user) => (Object.assign({}, user, { category: user.age < 50 ? 'young' : 'old' })));
//# sourceMappingURL=user.js.map