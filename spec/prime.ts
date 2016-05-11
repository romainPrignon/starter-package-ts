import PrimeServiceExtended from '../src/prime';

describe('(Service) Prime', () => {

  describe('(Method) isPrime', () => {

    let prime = new PrimeServiceExtended();

    it('2 should be prime', () => {
      expect(prime.isPrime(2)).toBe(true);
    });
  });

  describe('(Method) isPrimeInception', () => {

    let prime = new PrimeServiceExtended();

    it('2 should be prime', () => {
      expect(prime.isPrimeInception(2)).toBe(true);
    });
  });

});
