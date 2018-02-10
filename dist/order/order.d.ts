import { Order } from '../../type/index';
import { Observable } from 'rxjs';
export declare const computeOrderSumAsync: (orders: Order[]) => Promise<number>;
export declare const computeOrderSumObservable: (orders: Order[]) => Observable<number>;
