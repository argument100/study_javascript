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

func841();

















