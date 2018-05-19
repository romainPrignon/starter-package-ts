import { reduce } from 'lodash';
export const computeOrderSumAsync = async (orders) => reduce(orders, (acc, order) => acc + order.price, 0);
// export const computeOrderSumObservable = (orders: Order[]): Observable<number> =>
//   Observable.from(orders)
//     .reduce((acc: number, order: Order) => acc + order.price, 0)
//# sourceMappingURL=order.js.map