const mod = require('./Console');

const func461 = () => {
  let obj = {};
  let s = Symbol();

  obj[s] = 'hoge';
  mod.p(obj[s]);
}

func461();

const STATUS_LIVE = Symbol('status_live');
const STATUS_DEAD = Symbol('status_dead');
let phone = {
  IPHONE: Symbol('iphone'),
  ANDROID: Symbol('android'),
  OTHER: Symbol('other')
}
