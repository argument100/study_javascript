const mod = require('./Console');

const func451 = () => {
  mod.p(new Array(1));
  mod.p(Array.of(1)); // [1]
  mod.p(Array.of('A', 'B', 'C')); // ['A', 'B', 'C']
  mod.p(Array.of(undefined)); // [undefined]
  mod.p(Array.of('AAA', 10, false)); // ['AAA', 10, false]
}

func451();

