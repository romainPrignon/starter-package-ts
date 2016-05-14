import 'ts-helpers';
export interface PrimeInterface {
    isPrime(n: number): boolean;
}
export interface PrimeInterfaceExtended extends PrimeInterface {
    primeFactors(n: number): Array<number>;
}
export declare class PrimeService implements PrimeInterface {
    protected divisor: number;
    constructor(divisor?: number);
    isPrime(n: number): boolean;
}
export declare class PrimeServiceExtended extends PrimeService implements PrimeInterfaceExtended {
    constructor(divisor?: number);
    primeFactors(n: number): Array<number>;
}
export default PrimeServiceExtended;
