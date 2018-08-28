const mod = require('./Console');

// Node 未対応？？
const func521 = () => {
  let arr = [1, 2, 3];
  let itr = arr.values();

  mod.p(itr.next());
}

// func521();

const func522 = () => {
  let obj = {};
  obj[Symbol.iterator] = function() {
    let itr = {};
    let count = 1;

    itr.next = function() {
      let itrResult = (count <= 3)
        ? {value: count++, done: false}
        : {value: undefined, done: true};
      return itrResult;
    };
    return itr;
  };

  let iterator = obj[Symbol.iterator]();
  let iteratorResult;
  while(true) {
    iteratorResult = iterator.next();
    if (iteratorResult.done) {
      break;
    }
    console.log(iteratorResult.value);
  }

  for (let val of obj) {
    console.log(val);
  }
}

// func522();

const func541 = () => {
  let arr = ['hoge', 'fuga', 'boo'];
  for (let val of arr) {
    mod.p(val);
  }
}

func541();

const func542 = () => {
  let arr = ['hoge', 'fuga', 'boo'];
  for (let val of arr.keys()) {
    mod.p(val);
  }
}

func542();

const func543 = () => {
  let arr = ['hoge', 'fuga', 'boo'];
  for (let val of arr.entries()) {
    mod.p(val);
  }
}

func543();

const func544 = () => {
  let arr1 = ['a', 'b', 'c'];
  let arr2 = [1, 2, 3];
  let mergeArr = [...arr1, ...arr2];
  mod.p(mergeArr);
}

func544();









