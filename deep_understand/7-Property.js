const mod = require('./Console');

/**
 * 7-1. オブジェクトとプロパティ
 **/

const func711 = () => {
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
}

// func711();


/**
 * 7-6. プロパティ属性の操作
 **/

const func761 = () => {
  let human = {
    name: 'igarashi',
    sex: 'M'
  }

  // プロパティを走査
  for (let prop in human) {
    mod.p(prop); // name, sex
  }

  // nameを列挙不可に変更
  Object.defineProperty(human, 'name', {
    enumerable: false
  });

  // 改めてプロパティを走査
  for (let prop in human) {
    mod.p(prop); // sex
  }

  // 複数の属性をまとめて設定
  Object.defineProperty(human, 'name', {
    enumerable: true,
    configurable: false
  });

  // 改めてプロパティを走査
  for (let prop in human) {
    mod.p(prop); // sex
  }

};

// func761();

const func762 = () => {
  let human = {};

  Object.defineProperties(human, {
    
    // データプロパティの定義
    _name: {
      value: 'igarashi',
      writable: true,
      configurable: false
    },
    // アクセサプロパティ
    name: {
      get: function() {
        return this._name;
      },
      set: function(val) {
        this._name = val;
      },
      enumerable: true,
      configurable: true
    }
  });

  for (let prop in human) {
    mod.p(prop); // name
  }

  mod.p(human.name);
};

func762();
