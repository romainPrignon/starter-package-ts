import 'ts-helpers'
import PrimeFromStarter from '../node_modules/starter-package-ts/src/prime'

export interface PrimeInterface {
  isPrime(n: number): boolean
}

export interface PrimeInterfaceExtended extends PrimeInterface {
  primeFactors(n: number): Array<number>
}

export class PrimeService implements PrimeInterface {
  protected divisor: number

  constructor(divisor: number = 2) {
    this.divisor = divisor
  }

  public isPrime(n: number): boolean {
    let currentDivisor: number = this.divisor

    while (n > currentDivisor) {
      if (n % currentDivisor === 0) {
          return false
      } else {
        currentDivisor++
      }
    }

    return true
  }
}

export class PrimeServiceExtended extends PrimeService implements PrimeInterfaceExtended {
  constructor(divisor: number = 2) {
    super(divisor)
  }

  /**
   * Inception: use the isPrime function from self required package
   * @param {Number} n
   *
   * @return {Boolean}
   */
  public isPrimeInception(n: number): boolean {
    return new PrimeFromStarter().isPrime(n);
  }

  public primeFactors(n: number): Array<number> {
    let factors: Array<number> = []
    let currentDivisor: number = this.divisor
    let currentN: number = n

    while (currentN > 2) {
      if (currentN % currentDivisor === 0) {
        factors.push(currentDivisor)
        currentN = currentN / currentDivisor
      } else {
        currentDivisor++
      }
    }

    return factors
  }
}

export default PrimeServiceExtended
