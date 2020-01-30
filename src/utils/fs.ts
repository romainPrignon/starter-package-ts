import fs, { PathLike } from 'fs'
import util from 'util'
import { BaseError } from 'make-error-cause'


const readFileAsync = util.promisify(fs.readFile)
class FileNotFoundError extends BaseError {}

type ReadFile = (path: PathLike, encoding?: string) => Promise<string>
const readFile: ReadFile = async (path, encoding) => {
  try {
    if (encoding) {
      return await readFileAsync(path, encoding)
    } else {
      return await readFileAsync(path, 'utf8')
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new FileNotFoundError(err.message, err)
    }

    throw err
  }
}

export {
  readFile,
  FileNotFoundError
}
