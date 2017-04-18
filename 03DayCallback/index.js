const func = function(){
    console.log('xong');
};
// có tập câu lệnh bất đồng bộ (asynchronous)
setTimeout(func, 1000);
setTimeout(func, 1000);
// tập câu lệnh đồng bộ (synchronous)
let a = 5;
a++;
console.log(a);


