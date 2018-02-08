import { computeOrderSumAsync, computeOrderSumObservable } from '../../src/order/order'

describe('Order', () => {
  describe('computeOrderSumAsync', () => {
    it('should return the sum of all order price', async () => {
      // given
      const orders = [
        {
          price: 20
        },
        {
          price: 10
        }
      ]

      // when
      const output = await computeOrderSumAsync(orders)

      // then
      expect(output).toEqual(30)
    })

    it('should return the sum of all order price as observable', async () => {
      // given
      const orders = [
        {
          price: 20
        },
        {
          price: 10
        }
      ]

      // when
      const output = computeOrderSumObservable(orders)

      // then
      output.subscribe(
        (value) => expect(value).toEqual(30)
      )
    })
  })
})
