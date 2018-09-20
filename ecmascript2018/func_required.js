
function required() {
  throw new Error('Arguments is missing');
}
function hoge(value = required()) {
  return value;
}
hoge(); // Arguments is missing（エラー）
