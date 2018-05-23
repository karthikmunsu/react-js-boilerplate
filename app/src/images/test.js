var y = 'abcxyzabcdebcaabc';
var x = 'abc';

console.log((y.match(new RegExp(x, 'g')) || []).length);