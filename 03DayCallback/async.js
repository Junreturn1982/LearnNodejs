let a = 5;

setTimeout(function(){a++}, 1000);

console.log(a);

setTimeout(function(){ console.log(a) }, 1100);

/* 
// async: setTimeout, doc ghi file, query database, request service
// sync: process array, string, tính toán
// document:
https://nodejs.org/api/fs.html
fs.readFile(file[, options], callback)
fs.readFileSync(file[, options])
 */