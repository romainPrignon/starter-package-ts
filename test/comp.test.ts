// test
import * as comp from '../src/comp'

describe('comp', () => {
  describe('sumOfMultiple3and5Until', () => {
    it('should return 234168 when called with n = 1000', () => {
      expect(comp.sumOfMultiple3and5Until(1000)).toEqual(234168)
    })
  })
})
