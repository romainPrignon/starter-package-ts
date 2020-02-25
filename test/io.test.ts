// test
import * as io from '../src/io'
import { FileNotFoundError } from '@romainprignon/utils/native/errors'

describe('io', () => {
  describe('readIndex', () => {
    it('should reject FileNotFound exception when indexPath has no index file', async () => {
      await expect(io.readIndex('path-without-index')).rejects.toEqual(
        new FileNotFoundError(
          "ENOENT: no such file or directory, open 'path-without-index/index.txt'",
          { code: 'ENOENT', filename: 'index.txt' }
        )
      )
    })
    it('should reject FileNotFound exception when index file is missing content file two.txt', async () => {
      await expect(io.readIndex('./fixtures/io/missing')).rejects.toEqual(
        new FileNotFoundError("ENOENT: no such file or directory, open 'fixtures/io/missing/two.txt'",
          { code: 'ENOENT', filename: 'missing' }
        )
      )
    })
    it('should do nothing when index file has no content file', async () => {
      expect(await io.readIndex('./fixtures/io/zero')).toEqual('')
    })
    it('should return concat content when index file has content file', async () => {
      expect(await io.readIndex('./fixtures/io/more')).toEqual('one\ntwo\nthree\n')
    })
  })
})
