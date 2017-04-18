const arr = [1, 4, 2, 10];
const a = { value: 4 };
const b = a;
const arr2 = [{ value: 1}, a, { value: 2}, { value: 10}];

console.log(arr2.indexOf(b));

const c = { name: 'PHO' };
const d = { name: 'PHO' };

console.log(c === d);