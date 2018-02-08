import * as _ from 'lodash';
import { Observable } from 'rxjs';
export const computeOrderSumAsync = async (orders) => _(orders)
    .reduce((acc, order) => acc + order.price, 0);
export const computeOrderSumObservable = (orders) => Observable.from(orders)
    .reduce((acc, order) => acc + order.price, 0);
//# sourceMappingURL=order.js.map