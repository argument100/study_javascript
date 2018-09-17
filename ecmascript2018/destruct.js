// 分割代入
let [hoge, fuga] = [15, 21];
console.log(hoge); // 15
console.log(fuga);// 21

let [foo, piyo, ...other] = [10, 20, 30, 40, 50, 60];
console.log(foo); // 10
console.log(piyo); // 20
console.log(other); // [30, 40, 50, 60]

let {hohe, hahe} = {hohe: 'ほへ', hahe: 'はへ'};
console.log(hohe); // ほへ
console.log(hahe); // はへ

let data = {hoge: 'ほげ', foo: {piyo: 'ピヨ', goo: 'ぐー'}};
let [hoge, foo, foo: {piyo, goo}} = data;
console.log(hoge); // ほげ
console.log(foo); // {"piyo":"ピヨ", "goo":"ぐー"}
console.log(piyo); // ピヨ
console.log(goo); // ぐー

let {hoge: x, foo} = {hoge: 'ほげ', foo: 'ふー'};
console.log(x); // ほげ

// 初期値
let {hoge = 'ほげほげ', foo} = {foo: 'ふー'};
console.log(hoge); // ほげほげ



