let num = 5;

function test(b){
    b++;
}

test(num);
console.log(num);

// alias
const hoang = {name : 'Hoang', age : 35};
const hoang2 = hoang;
hoang.age++;
console.log(hoang2);

let a = 5;
let b = a;
a++;
console.log(b);