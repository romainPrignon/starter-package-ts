"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrimeService {
    constructor(divisor = 2) {
        this.isPrimeAsync = async (n) => await this.isPrime(n);
        this.divisor = divisor;
    }
    isPrime(n) {
        let currentDivisor = this.divisor;
        while (n > currentDivisor) {
            if (n % currentDivisor === 0) {
                return false;
            }
            else {
                currentDivisor++;
            }
        }
        return true;
    }
}
exports.PrimeService = PrimeService;
class PrimeServiceExtended extends PrimeService {
    constructor(divisor = 2) {
        super(divisor);
    }
    primeFactors(n) {
        let factors = [];
        let currentDivisor = this.divisor;
        let currentN = n;
        while (currentN > 2) {
            if (currentN % currentDivisor === 0) {
                factors.push(currentDivisor);
                currentN = currentN / currentDivisor;
            }
            else {
                currentDivisor++;
            }
        }
        return factors;
    }
}
exports.PrimeServiceExtended = PrimeServiceExtended;
exports.default = PrimeServiceExtended;
//# sourceMappingURL=index.js.map