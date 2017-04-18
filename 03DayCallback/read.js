const fs = require('fs');
// sync
const file = fs.readFileSync('data/data.txt','utf-8');
console.log(file);

// async
let result;
fs.readFile('data/data.txt','utf-8', function(err, data){
    result = data;
});
console.log(result);

// function async
// use callback
function readFile(fileName, cb){
    fs.readFile(fileName,'utf-8', function(err, data){
        cb(data);
    });
}
// readFile('data/data.txt', function(data){
//     console.log('Ket qua: '+data);
// });
function onReadFinish(data){
    console.log('Ket qua: '+data);
}
readFile('data/data.txt', onReadFinish);

// do node js single thread nen sử dụng bất đồng bộ
// nếu sử dụng đồng bộ server đứng do single thread
