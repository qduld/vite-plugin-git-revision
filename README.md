# vite-plugin-pages

[![npm version](https://badgen.net/npm/v/vite-plugin-git-revision)](https://www.npmjs.com/package/vite-plugin-git-revision)
[![monthly downloads](https://badgen.net/npm/dm/vite-plugin-git-revision)](https://www.npmjs.com/package/vite-plugin-git-revision)

> Git version info for Vue 3 applications using [Vite](https://github.com/vitejs/vite)

## Getting Started

Install:

```bash
$ npm install -D vite-plugin-git-revision
```

Add to your `vite.config.js`:

```js
import Vue from '@vitejs/plugin-vue';
import GitRevision from 'vite-plugin-git-revision';

export default {
  plugins: [
    Vue(), 
    GitRevision()
  ],
};
```
## Configuration

To use custom configuration, pass your options to Pages when instantiating the plugin:

```js
// vite.config.js
import GitRevision from 'vite-plugin-git-revision';

export default {
  plugins: [
    GitRevision({
      lightweightTags:false,
      branch:false,
      versionCommand:'describe --tags --long --dirty --always',
      commithashCommand:'',
      branchCommand:'',
    }),
  ],
};
```

### lightweightTags

- **Type:** `boolean`
- **Default:** `false`

lightweight tags support.

### branch

- **Type:** `boolean`
- **Default:** `false`

branch tags support.

### versionCommand

- **Type:** `string`
- **Default:** `describe --always`

change the default git command used to read the value of VERSION.

### commithashCommand

- **Type:** `string`
- **Default:** `rev-parse HEAD`

change the default git command used to read the value of COMMITHASH.

### branchCommand

- **Type:** `string`
- **Default:** `rev-parse --abbrev-ref HEAD`

change the default git command used to read the value of BRANCH.

## License

MIT License © 2021 [qduld](https://github.com/qduld)
