# psd-layout-loader

[![npm](https://img.shields.io/npm/v/psd-layout-loader.svg)](https://www.npmjs.com/package/psd-layout-loader)
[![license](https://img.shields.io/github/license/zprodev/psd-layout-loader.svg)](LICENSE)

Instructs webpack to emit the required img as file and to return its psd layout

## Install

```
npm install --save-dev psd-layout-loader
```

## Usage

```
import psdLayout from './sample.psd'
```

### webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.psd$/,
        loader: 'psd-layout-loader',
        options: {
          outImgDir : './dist'
        }
      }
    ]
  }
}
```