const mod = require('./Console');

/**
 * 7-1. オブジェクトとプロパティ
 **/

let obj = {
  prop1: false,
  func1: () => {
    mod.p('fuga');
  }
}


mod.p('in------------');
mod.p('prop1' in obj);
mod.p('prop2' in obj);
mod.p('func1' in obj);
mod.p('func2' in obj);

mod.p('hasOwnProperty------------');
mod.p(obj.hasOwnProperty('prop1'));
mod.p(obj.hasOwnProperty('prop2'));
mod.p(obj.hasOwnProperty('func1'));
mod.p(obj.hasOwnProperty('func2'));


