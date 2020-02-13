import path from 'path'
import h from 'highland'
import * as fs from '@romainprignon/utils/dist/native/fs'


const readIndex = async (indexPath: string): Promise<string> =>
  h([indexPath])
    .map(pathname => path.join(pathname, 'index.txt'))
    .flatMap(filename => h(fs.readFile(filename, 'utf8')))
    .flatMap(content => h(content.split('\n').filter(Boolean)))
    .flatMap(filename => h(fs.readFile(path.join(indexPath, filename), 'utf8')))
    .reduce('', (acc, content) => acc.concat(content))
    .toPromise(Promise)

export {
  readIndex
}
