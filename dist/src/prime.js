"use strict";
require('ts-helpers');
var prime_1 = require('../node_modules/starter-package-ts/src/prime');
var PrimeService = (function () {
    function PrimeService(divisor) {
        if (divisor === void 0) { divisor = 2; }
        this.divisor = divisor;
    }
    PrimeService.prototype.isPrime = function (n) {
        var currentDivisor = this.divisor;
        while (n > currentDivisor) {
            if (n % currentDivisor === 0) {
                return false;
            }
            else {
                currentDivisor++;
            }
        }
        return true;
    };
    return PrimeService;
}());
exports.PrimeService = PrimeService;
var PrimeServiceExtended = (function (_super) {
    __extends(PrimeServiceExtended, _super);
    function PrimeServiceExtended(divisor) {
        if (divisor === void 0) { divisor = 2; }
        _super.call(this, divisor);
    }
    /**
     * Inception: use the isPrime function from self required package
     * @param {Number} n
     *
     * @return {Boolean}
     */
    PrimeServiceExtended.prototype.isPrimeInception = function (n) {
        return new prime_1.default().isPrime(n);
    };
    PrimeServiceExtended.prototype.primeFactors = function (n) {
        var factors = [];
        var currentDivisor = this.divisor;
        var currentN = n;
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
    };
    return PrimeServiceExtended;
}(PrimeService));
exports.PrimeServiceExtended = PrimeServiceExtended;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PrimeServiceExtended;
//# sourceMappingURL=prime.js.map