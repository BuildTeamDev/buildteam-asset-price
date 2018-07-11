import axios from 'axios';

const default_opts = {
  api: 'https://cryptofresh.com/api/asset/markets?asset=',
  bridge: 'BTS',
  token: 'BUILDTEAM'
}

export default function getBuildteamTokenPrice(currency = 'USD', opts = default_opts ) {
  return new Promise(function(resolve, reject) {
    axios.get(opts.api + opts.token)
    .then(function (r) {
      return r.data[opts.bridge];
    }).then(function(asset){
      asset.name = opts.token;
      if(currency === opts.bridge) {
        asset.price_currency = currency;
        asset.price_pretty = `${asset.price} ${currency}`;
        return resolve(asset);
      } else {
        axios.get(opts.api + opts.bridge).then(function(p) {
          const bridge = p.data[currency];
          if(!bridge) return reject(new Error(`${currency} is a not valid ${opts.bridge} pair`));
          asset.price = asset.price * bridge.price;
          asset.price_currency = currency;
          asset.price_pretty = `${asset.price} ${currency}`;
          resolve(asset);
        }).catch(function (error) {
          reject(error);
        });
      }
    }).catch(function (error) {
      reject(error);
    });
  });
}
