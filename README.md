# starter-package-ts

starter for node module written in typescript

## using this repository as a starting point

```sh
git clone https://github.com/romainprignon/starter-package-ts.git
cd starter-package-ts
```

* rename all occurence of 'starter-package-ts' in 'README' and 'package.json'
* remove fiels 'src/' and 'test/' directories

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

```js
var starter = require('starter-package-ts');
...
```

## Test

```sh
npm run test
```

## Debug

use debugger; in your code then :
```sh
npm run inspect # in a new tab
npm test -- debug
```
then open [node-inspector](http://127.0.0.1:8080/debug?port=5858)

## Documentation

Take a look at the [documentation table of contents](doc/TOC.md).

## License

The code is available under the [MIT license](LICENSE.md).
