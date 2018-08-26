const mod = require('./Console');

const func451 = () => {
  mod.p(new Array(1));
  mod.p(Array.of(1)); // [1]
  mod.p(Array.of('A', 'B', 'C')); // ['A', 'B', 'C']
  mod.p(Array.of(undefined)); // [undefined]
  mod.p(Array.of('AAA', 10, false)); // ['AAA', 10, false]
}

// func451();

const func452 = () => {
  mod.p(Array.of(2)); // [2]
  mod.p(new Array(2)); // [undefined x 2]
}

// func452();

const func453 = () => {
  let arr = new Array(5);

  mod.p(arr.fill('X')); // ['X', 'X', 'X', 'X', 'X']
  mod.p(arr.fill('A', 2, 3)); // ['X', 'X', 'A', 'X', 'X']
  mod.p(arr.fill('B', 3)); // ['X', 'X', 'A', 'B', 'B']
  mod.p(arr.fill('C', -2)); // ['X', 'X', 'A', 'C', 'C']
}

// func453();

const func454 = () => {
  let arr = [0, 1, 2, 3, 4, 5];
  mod.p(arr.copyWithin(2, 4)); // [0, 1, 4, 5, 4, 5]
  mod.p(arr.copyWithin(3, 1, 2)); // [0, 1, 4, 1, 4, 5]
  mod.p(arr.copyWithin(0, 1)); // [1, 4, 1, 4, 5, 5]
}

func454();









