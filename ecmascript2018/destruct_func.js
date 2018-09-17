
function destructure() {
  let result1 = 10;
  let result2 = 20;
  return [result1, result2];
}

let [hoge, fuga] = destructure();

console.log(hoge); // 10
console.log(fuga); // 20

let [, foo] = destructure(); // result1は切り捨てられresult2だけ
