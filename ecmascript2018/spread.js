console.log(Math.max(100, -10, 50, 108)); // 108
console.log(Math.max([100, -10, 50, 108])); // null

// 従来
console.log(Math.max.apply(null, [100, -10, 50, 108])); // 108

// ES2015
console.log(Math.max(...[100, -10, 50, 108])); // 108


