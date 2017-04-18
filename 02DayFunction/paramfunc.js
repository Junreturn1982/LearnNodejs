function a(cl){
    cl();
}
// console.log like param is value
a(console.log);

function ham(cb){
    return cb(123);
}
function double(ham){
    return ham*2;
}
console.log(ham(double));

// function truyen mot so, so do tang len mot
function tang1(num){
    return Math.ceil(num);
}
console.log(tang1(4));