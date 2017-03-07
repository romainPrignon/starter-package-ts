import 'ts-helpers'

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

  public isNotPrime(n: Number): Boolean {
    return this.isPrime(n)
  }
}

export class PrimeServiceExtended extends PrimeService implements PrimeInterfaceExtended {
  constructor(divisor: number = 2) {
    super(divisor)
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
