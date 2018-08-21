let func421 = () => {
  console.log( '4-2-①-------------------------' );
  console.log( Object.is(true, true) );
  console.log( Object.is('hoge', 'fuga') );
  console.log( Object.is(100, 100) );
  console.log( Object.is(0/0, NaN) );
  console.log( Object.is(null, null) );
  console.log( Object.is(undefined, undefined) );
  console.log( Object.is(null, undefined) );

  let obj1 = {};
  let obj2 = obj1;
  console.log( Object.is(obj1, obj2) );
  console.log( Object.is({}, {}) );
}


let func422 = () => {
  console.log( '4-2-②-------------------------' );
  console.log( Object.is(NaN, NaN) );
  console.log( NaN === NaN );

  console.log( Object.is(+0, -0) );
  console.log( +0 === -0 );
}

let func423 = () => {
  console.log( '4-2-③-------------------------' );
  let obj = { val: 'hoge' };
  let copyObj = Object.assign({}, obj);
  console.log(copyObj.val);

  // オブジェクトのマージ
  let objA = {a: 'a'};
  let objB = {b: 'b'};
  let objC = {c: 'c'};
  let mergeObj = Object.assign(objA, objB, objC);
  console.log(objA);
  console.log(objA === mergeObj);

  // シンボル型プロパティのコピー
  let objD = {d: 'd'};
  let objSym = { [Symbol('sym')]: 2 };
  let copyObj2 = Object.assign(objD, objSym);
  console.log(copyObj2);

  // 番外編
  let human = { name: 'iga' };
  let igarashi = Object.assign({}, human);
  human.name = 'tara';
  console.log(igarashi);
}

func423();

