import { User } from '../../type/index';
export declare const sortUserByAge: (users: User[]) => User[];
export declare const getUserOrderTotalPriceAsync: (user: User) => Promise<number>;
export declare const addUsersAgeCategory: (users: User[]) => User[];
