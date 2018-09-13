// SECRETプロパティの名前でシンボルで準備
//
const SECRET = Symbol();
export class MyClazz {
  constructor(secret) {
    this.data1 = 1;
    this.data2 = 2;

    this[SECRET] = secret;
  }

  checkSecret(secret) {
    return this[SECRET] === secret;
  }
}

// ここから別ファイル想定

import {MyClazz} from './MyLib.js';
let c = new MyClazz(12345);

console.log(c.checkSecret(12345)); // true

// SECRETプロパティへの直接アクセスは不可
console.log(c[SECRET]); // error
// オブジェクトのキーを列挙
console.log(Object.keys(c)); // ["data1", "data2"]
for (let k in c) {
  console.log(k); // data1, data2
}

// オブジェクトをJSON文字列に変換
console.log(JSON.stringify(c)); // {"data1":1, "data2":2}
