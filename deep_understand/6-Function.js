
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

console.log('6-5--------------------');

/**
 * 6-5. オーバーロード
 **/

function func652(val) {
  if (arguments.length === 0) {
    val = 'hoge';
  }

  console.log(val);
}

func652();
func652('fuga');


console.log('6-6--------------------');

/**
 * 6-6. ゲッタとセッタ
 **/

let func661 = () => {
  let human = {
    _name: '',
    get name() {
      return this._name;
    },
    set name(val) {
      this._name = val;
    }
  }

  human.name = 'igarashi';
  console.log(human.name);
};

// func661();

let func663 = () => {
  let human = (function() {
    let _name;

    return {
      get name() {
        return `名前は${_name}です`;
      },
      set name(val) {
        _name = val;
      }
    }
  })();

  human.name = 'igarashi';
  console.log(human.name);
  console.log(human._name);

  human._name = 'tarama';
  console.log(human.name);
  console.log(human._name);
}

func663();













