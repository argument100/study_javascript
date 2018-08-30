
/**
 * 6-1. 改めて「関数」とは
 **/

function func611(val) {
  console.log(val);
}
func611('hoge');

let a = 'foo';
let b = 'bar';
{
  let a = 1;
  let b = 2;
  let add = (aa, ab) => {
    console.log(aa +ab);
  }
  add(a, b);
}

console.log(a + b);

/**
 * 6-4. 安全なコンストラクタ
 **/

function Phone(name) {
  // thisのチェックを行う
  if (this instanceof Phone) {
    this.name = name;
  } else {
    return new Phone(name);
  }
};

Phone.prototype.getName = function() {
  return this.name
};

let myPhone1 = new Phone('xxxx');
let myPhone2 = Phone('yyyy');

console.log(myPhone1.getName());
console.log(myPhone2.getName());
console.log(myPhone1 instanceof Phone);
console.log(myPhone2 instanceof Phone);

















