"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
// import { Observable } from 'rxjs'
exports.computeOrderSumAsync = async (orders) => lodash_1.reduce(orders, (acc, order) => acc + order.price, 0);
// export const computeOrderSumObservable = (orders: Order[]): Observable<number> =>
//   Observable.from(orders)
//     .reduce((acc: number, order: Order) => acc + order.price, 0)
//# sourceMappingURL=order.js.map