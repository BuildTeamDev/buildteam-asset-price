# buildteam-asset-price [![Package Version](https://img.shields.io/npm/v/buildteam-asset-price.svg?style=flat-square)](https://www.npmjs.com/package/buildteam-asset-price)

Fetches [BUILDTEAM](https://cryptofresh.com/a/BUILDTEAM) price from bitshares via CryptoFresh

## Installation

```
npm i buildteam-asset-price --save
```

## Import
```javascript
import getBuildteamTokenPrice from 'buildteam-asset-price'
```

## Usage

Simple usage:

```javascript
  getBuildteamTokenPrice().then((r) => {
    console.log(r);
  }).catch(function(error) {
    console.error(error);
  });
```

Usage with options:

```javascript
  const opts = {
    api: 'https://cryptofresh.com/api/asset/markets?asset=',
    bridge: 'BTS',
    token: 'BUILDTEAM'
  };
  getBuildteamTokenPrice('USD', opts).then((r) => {
    console.log(r);
  }).catch(function(error) {
    console.error(error);
  });
```

## license

MIT
