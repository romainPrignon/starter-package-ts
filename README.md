mettre en funcional programming
revoir debug
release propre sur git
revoir release doc et readme
test generator, faker,...

# starter-package-ts

Starter for a node package written in typescript

## Using this repository as a starting point

```sh
git clone https://github.com/romainprignon/starter-package-ts.git
cd starter-package-ts
```

* rename all occurence of 'starter-package-ts' in project
* remove files from 'src/' and 'test/' directories

```sh
rm -rf .git
git init
git remote add origin <repo_url>
npm install
```

## Installation

```sh
npm install --save git://github.com/romainprignon/starter-package-ts.git
```

## Usage
See `package.json` for a list of command that you can use

### Debug

use debugger; in your code then :
```sh

npm run test:debug
```
then open [node-inspector](http://127.0.0.1:8080/debug?port=5858)
and handle test using debug cli

### Release

```sh
npm run release
npm run release -- minor # can be patch, minor, major
```
see release-it package for more infos

### License

The code is available under the [MIT license](LICENSE.md).
