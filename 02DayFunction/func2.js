const log = typeof console.log;
console.log(log);

function getLog(){
    return console.log;
}

getLog()('123');

function a(){
    console.log('AAA');
}
const b = a;
b();

function c(){
    return a;
}
c()();