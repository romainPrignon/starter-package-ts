"use strict";
var prime_1 = require('../src/prime');
describe('(Service) Prime', function () {
    describe('(Method) isPrime', function () {
        var prime = new prime_1.default();
        it('2 should be prime', function () {
            expect(prime.isPrime(2)).toBe(true);
        });
    });
});
//# sourceMappingURL=prime.js.map