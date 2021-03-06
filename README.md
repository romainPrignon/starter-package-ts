# starter-package-ts

> Starter for a node package written in typescript


## Using this repository as a starting point

```sh
git clone https://github.com/romainprignon/starter-package-ts.git
cd starter-package-ts
```

* rename all occurence of `starter-package-ts` in `pacakge.json` and `README.md`
* remove files from  `src` `test` `type` directories
* edit all `EDIT_ME` annoted part

```sh
rm -rf .git
git init
git remote add origin <repo_url>
npm install
```


## Setup

```sh
npm install --save starter-package-ts
```


## Usage

See [package.json](package.json) scripts section


## API

See [dist/index.d.ts](dist/index.d.ts)


## Release

Example: Releasing a minor version following semver

```sh
npm run version:minor
npm run publish
```


## License

The code is available under the [MIT license](LICENSE.md).
