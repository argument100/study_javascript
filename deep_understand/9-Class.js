
class Human911 {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(`名前は${this.name}です`);
  }
}

let igarashi = new Human911('igarashi');
igarashi.getName();


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
igarashi2.showInfo();

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
igarashi3.showInfo();
