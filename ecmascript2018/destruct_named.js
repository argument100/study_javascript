function trapezoid({upper = 1, lower = 1, height = 1}) {
  return (upper + lower) * height / 2;
}

console.log(
  trapezoid({
    upper: 5,
    lower: 10,
    height: 2
  })
); // 15

let book = {
  isbn: '978-4-7741-7568-3',
  title: 'AngularJSアプリケーションプログラミング',
  price: 3700
};
function getInfo({isbn}) {
  console.log(isbn);
}

getInfo(book); // 978-4-7741-7568-3
