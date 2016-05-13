# starter-package-ts

starter for node module written in typescript

## using this repository as a starting point

```sh
git clone https://github.com/romainprignon/starter-package-ts.git
cd starter-package-ts
```

* rename all occurence of 'starter-package-ts' in 'README' and 'package.json'
* remove files from 'src/' and 'test/' directories
* remove 'main.*' files

```sh
rm -rf .git
git init
git remote add origin <repo_url>
npm install
```

## Installation

```sh
npm install git://github.com/romainprignon/starter-package-ts.git --save
```

## Usage

### Develop

```js
var starter = require('starter-package-ts');
...
```

### Test

```sh
npm run test
```

### Watch

```sh
npm run test:watch
```

### Debug

use debugger; in your code then :
```sh
npm run inspect # in a new tab
npm run test:debug
```
then open [node-inspector](http://127.0.0.1:8080/debug?port=5858)
and handle test using debug cli

### Documentation

Take a look at the [documentation table of contents](doc/TOC.md).

### License

The code is available under the [MIT license](LICENSE.md).

## Todo
* [x] debugging
* [x] coverage
* [x] watching
* [x] lint rules
* [x] export typings
* [x] clean dependencies
* [ ] release (changelog, bump,...)
