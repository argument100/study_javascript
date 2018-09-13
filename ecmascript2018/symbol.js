let hoge = Symbol('hoge');
let hoge2 = Symbol('hoge');

console.log(typeof hoge); // symbol
console.log(hoge.toString()); // Symbol(hoge)
console.log(hoge === hoge2); // false

/* どちらもエラー
console.log(hoge + '');
console.log(hoge - 0);
*/

console.log(typeof !!hoge); // boolean
console.log(typeof new Object(hoge)); // object

