let p = (some) => {
  console.log(some);
}
let func431 = () => {
  p('ABCDE'.startsWith('A')); // true
  p('ABCDE'.startsWith('AB')); // true
  p('ABCDE'.startsWith('B')); // false
  p('ABCDE'.startsWith('AB', 1)); // false
  p('ABCDE'.startsWith('BC', 1)); // true
}

//func431();

let func432 = () => {
  p('ABCDE'.endsWith('E')); // true
  p('ABCDE'.endsWith('DE')); // true
  p('ABCDE'.endsWith('D')); // false
  p('ABCDE'.endsWith('D', 4)); // true
  p('ABCDE'.endsWith('CD', 3)); // false
  p('ABCDE'.endsWith('CD', 4)); // true
}

//func432();

let func433 = () => {
  p('ABCDE'.includes('C')); // true
  p('ABCDE'.includes('CD')); // true
  p('ABCDE'.includes('F')); // false
  p('ABCDE'.includes('AB', 1)); // false
  p('ABCDE'.includes('BC', 1)); // true
}

//func433();

let func434 = () => {
  p('A'.repeat(0)); // ''
  p('A'.repeat(1)); // 'A'
  p('A'.repeat(3)); // 'AAA'
  p('A'.repeat(1.1)); // 'A'
  p('A'.repeat(0)); // ''
  p('AB'.repeat(3)); // 'ABABAB'
  //p('A'.repeat(-1)); // エラー
}

func434();













