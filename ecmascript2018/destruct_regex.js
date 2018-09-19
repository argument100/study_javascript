let tel = '000-111-2222';
let tel_pattern = /^(0\d{2,4})\-(\d{1,4)\-(\d{2,5)$/;
let [, area, local, privated] = tel_pattern.exec(tel);
console.log(area); // 000
console.log(local); // 111
console.log(privated); // 2222

