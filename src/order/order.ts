import { Order } from '../../type/index'

import * as _ from 'lodash'
import { Observable } from 'rxjs'

export const computeOrderSumAsync = async (orders: Order[]): Promise<number> =>
  _(orders)
    .reduce((acc: number, order: Order) => acc + order.price, 0)

export const computeOrderSumObservable = (orders: Order[]): Observable<number> =>
  Observable.from(orders)
    .reduce((acc: number, order: Order) => acc + order.price, 0)
