
class Human911 {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(`名前は${this.name}です`);
  }
}

let igarashi = new Human911('igarashi');
// igarashi.getName();


class Human921 {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex == 'M' ? '男性' : '女性';
  }
  showInfo() {
    console.log(`私は${this.name}、${this.age}歳の${this.sex}です。`);
  }
}

let igarashi2 = new Human921('igarashi', 35, 'M');
// igarashi2.showInfo();

class Human931 {
  constructor(name, age, sex) {
    this.name = name;
    age = age;
    this.sex = sex == 'M' ? '男性' : '女性';
  }
  showInfo() {
    // ageがundefined
    console.log(`私は${this.name}、${this.age}歳の${this.sex}です。`);
    // age参照エラー
    console.log(`私は${this.name}、${age}歳の${this.sex}です。`);
  }
}

let igarashi3 = new Human931('igarashi', 35, 'M');
// igarashi3.showInfo();

class Human941 {
  constructor(fName, lName, age, sex) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.sex = sex == 'M' ? '男性' : '女性';
  }
  getName() {
    return this.lName + this.fName;
  }
  showInfo() {
    console.log(`私は${getName}、${this.age}歳の${this.sex}です。`);
  }
}

let igarashi4 = new Human941('hajime', 'igarashi', 35, 'M');
// igarashi4.showInfo(); // エラー

let count = 0;
class Human942 {
  constructor(name) {
    this.name = name;
    count += 1;
  }
  getName() {
    console.log(`名前は${this.name}です`);
  }
  static getCount() {
    return count;
  }
}

let igarashi42 = new Human942('igarashi');
let tarama42 = new Human942('tarama');
console.log(Human942.getCount()); // 2
