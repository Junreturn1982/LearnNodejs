const request = require('request');
const fs = require('fs');
// let url = 'http://app.nhodalat.com/sp_by_type.php?id_type=4'; 
// request('http://app.nhodalat.com/', function(err,response,body){
//     console.log(body);
// });

function getList(idList, cb){
    request('http://app.nhodalat.com/sp_by_type.php?id_type='+idList, function(err,response,body){
        cb(body);
    });
}
// write data
function writeFile(fileName, data, cb){
    fs.writeFile(fileName, data, 'utf8', function(err){
        cb();
    });
}
getList(4, function(data){});

function getAndSave(idList, fileName, cb){
    getList(idList, function(data){
        writeFile(fileName,data,cb);
    });
}

getAndSave(4,'data/4.txt',function(){
    console.log('Da ghi')
})






