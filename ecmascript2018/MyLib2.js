const SEC_METHOD = Symbol();
class MyClazz2 {
  [SEC_METHOD]() {
    return 'Private Value';
  }
  getSecret() {
    return `Public: ${this[SEC_METHOD]()}`;
  }
}

// ここから別ファイル想定

import {MyClazz2} from 'MyLib2.js';

let c = new MyClazz2();
console.log(c.getSecret()); // Public: Private Value
console.log(c[SEC_METHOD]()); // SEC_METHOD is not defined（エラー）

