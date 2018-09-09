const mod = require('./Console');

/**
 * 8-2. 拡張の禁止
 **/

const func821 = () => {
  let human = {
    name: 'igarashi'
  };

  mod.p(Object.isExtensible(human)); // true

  // オブジェクトの拡張を禁止
  Object.preventExtensions(human);

  mod.p(Object.isExtensible(human)); // false

  // プロパティの追加を試みる
  human.sex = 'M'; // Strictモードの場合、ここでエラー

  mod.p('sex' in human); // false
};

// func821();

/**
 * 8-3. オブジェクトの封印
 **/

const func831 = () => {
  let human = {
    name: 'igarashi'
  };

  mod.p(Object.isSealed(human)); // false

  // プロパティを追加
  human.sex = 'M';
  human.age = 35;

  mod.p('sex' in human); // true
  mod.p('age' in human); // true

  // プロパティを削除
  delete human.sex;

  mod.p('sex' in human); // false

  // オブジェクトを封印
  Object.seal(human);

  mod.p(Object.isSealed(human)); // true

  // プロパティの削除
  delete human.age; // Strictモードの場合、ここでエラー

  mod.p('age' in human); // true
};

// func831();


/**
 * 8-4. オブジェクトの凍結
 **/

const func841 = () => {
  let human = {
    name: 'igarashi'
  };

  mod.p(Object.isFrozen(human)); // false

  // プロパティを変更する
  human.name = 'tarama';

  mod.p(human.name); // tarama

  // オブジェクトを凍結
  Object.freeze(human);

  mod.p(Object.isFrozen(human)); // true

  // プロパティの変更を試みる
  human.name = 'masaru'; // Strictモードの場合、ここでエラー

  mod.p(human.name); // tarama
};

// func841();

/**
 * 8-5. オブジェクトの凍結
 **/

const func851 = () => {
  let Phone = {
    name: 'my phone',
    call: function() {
      mod.p(`...${this.name} is Calling`);
    }
  };

  // オブジェクトの継承
  let Phone2 = Object.create(Phone);
  Phone2.call(); // ...my phone is Calling

  // オブジェクトを継承して、プロパティも指定
  let SmartPhone = Object.create(Phone, {
    name: {
      value: 'SmartPhone',
      writable: true,
      configurable: true,
      enumerable: true
    },
    type: {
      value: 'Android',
      writable: false,
      configurable: false,
      enumerable: true
    }
  });

  mod.p(SmartPhone.type); // Android
  SmartPhone.call(); // ...Smartphone is Calling
}

// func851();

const func852 = () => {
  let nakedObj = Object.create(null);

  mod.p('valueOf' in nakedObj); // false
  mod.p('toString' in nakedObj); // false
}

// func852();

const func861 = () => {
  try {
    hoge;
  } catch(e) {
    mod.p(e.message); // hoge is not defined
    mod.p(e instanceof Error); // true
    mod.p(e instanceof ReferenceError); // true
  } finally {
    mod.p('end'); //end
  }
}

// func861();

const func862 = () => {
  try {
    throw 'hoge';
  } catch(e) {
    mod.p(e); // hoge
    mod.p(e.message); // undefined
    mod.p(e instanceof Error); // false
  }
};

//func862();

const func863 = () => {
  // throw new Error('エラーが発生しました');

  let err = new Error();

  err.message = 'エラーが発生しました！';

  throw err;
}

func863();











