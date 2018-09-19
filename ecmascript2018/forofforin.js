let data = ['うめ', 'もも', 'さくら'];
Array.prototype.hoge = function() {};

for(let d of data) {
  console.log(d);
}
// うめ、もも、さくら

// ここから別ファイル想定

let data = ['うめ', 'もも', 'さくら'];
Array.prototype.hoge = function() {};

for(let d in data) {
  console.log(d);
}
// 0, 1, 2, hoge
