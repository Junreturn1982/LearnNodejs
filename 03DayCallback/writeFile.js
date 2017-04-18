const fs = require('fs');

// write data
function writeFile(fileName, data, cb){
    fs.writeFile(fileName, data, 'utf8', function(err){
        cb();
    });
}
writeFile('data/message.txt','Hello', function(){
    console.log('Da ghi');
});