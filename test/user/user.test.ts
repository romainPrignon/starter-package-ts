import { addUsersAgeCategory, sortUserByAge } from '../../src/user/user'

describe('User', () => {
  describe('sortUserByAge', () => {
    it('should be a function', () => {
      expect(sortUserByAge).toBeDefined()
      expect(sortUserByAge).toBeInstanceOf(Function)
    })

    it('should return users sorted by age', () => {
      // given
      const users = [
        {
          name: 'Elizabeth',
          age: 56,
          hair: 'black',
          orders: [
            { name: 'ham', price: 2, quantity: 2 },
            { name: 'bread', price: 1, quantity: 3 },
            { name: 'apples', price: 2, quantity: 3 }
          ]
        },
        {
          name: 'Martin',
          age: 14,
          orders: [
            { name: 'ham', price: 2, quantity: 2 },
            { name: 'eggs', price: 1, quantity: 6 },
            { name: 'bacon', price: 5, quantity: 1 }
          ]
        }
      ]

      // when
      const output = sortUserByAge(users)

      // then
      const expectedOutput = [
        {
          name: 'Martin',
          age: 14,
          orders: [
            { name: 'ham', price: 2, quantity: 2 },
            { name: 'eggs', price: 1, quantity: 6 },
            { name: 'bacon', price: 5, quantity: 1 }
          ]
        },
        {
          name: 'Elizabeth',
          age: 56,
          hair: 'black',
          orders: [
            { name: 'ham', price: 2, quantity: 2 },
            { name: 'bread', price: 1, quantity: 3 },
            { name: 'apples', price: 2, quantity: 3 }
          ]
        }
      ]

      expect(output).toEqual(expectedOutput)
    })
  })

  describe('addUsersAgeCategory', () => {
    it('should return users with category', () => {
      // given
      const users = [
        {
          name: 'Elizabeth',
          age: 56,
          hair: 'black',
          orders: [
            { name: 'ham', price: 2, quantity: 2 },
            { name: 'bread', price: 1, quantity: 3 },
            { name: 'apples', price: 2, quantity: 3 }
          ],
          category: 'old'
        },
        {
          name: 'Martin',
          age: 14,
          orders: [
            { name: 'ham', price: 2, quantity: 2 },
            { name: 'eggs', price: 1, quantity: 6 },
            { name: 'bacon', price: 5, quantity: 1 }
          ],
          category: 'young'
        }
      ]

      // when
      const output = addUsersAgeCategory(users)

      // then
      const expectedOutput = [
        {
          ...users[0],
          category: 'old'
        },
        {
          ...users[1],
          category: 'young'
        }
      ]

      expect(expectedOutput).toEqual(output)
    })
  })
})
