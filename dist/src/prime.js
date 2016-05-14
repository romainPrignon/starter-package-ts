"use strict";
require('ts-helpers');
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