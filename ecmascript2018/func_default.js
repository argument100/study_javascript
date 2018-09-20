/*
function show(name) {
  if (name === undefined) {
    name = '権兵衛';
  }
  console.log('私の名前は' + name + 'です');
}
*/

function show(name = '権兵衛') {
  console.log('私の名前は' + name + 'です');
}

show(); // 私の名前は権兵衛です
show('リオ'); // 私の名前はリオです


function add(a, b = a) {
  return a + b;
}
console.log(add(1, 4)); // 5
console.log(add(1)); // 2


