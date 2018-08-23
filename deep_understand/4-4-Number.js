const mod = require('./Console');

const func441 = () => {
  mod.p(Number.isNaN(NaN)); // true
  mod.p(isNaN(NaN)); // true
  mod.p(Number.isNaN('foo')); // false
  mod.p(isNaN('foo')); // true
  mod.p(Number.isNaN(undefined)); // false
  mod.p(isNaN(undefined)); // true
  mod.p(Number.isNaN({})); // false
  mod.p(isNaN({})); // true
  mod.p(Number.isNaN({foo: 'foo'})); // false
  mod.p(isNaN({foo: 'foo'})); // true
}

//func441();

const func442 = () => {
  mod.p(Number.isInteger(1)); // true
  mod.p(Number.isInteger(0.1)); // false
  mod.p(Number.isInteger(NaN)); // false
  mod.p(Number.isInteger(Infinity)); // false
}

func442();
