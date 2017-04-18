const arrNum = [1,2,4,5,10];

console.log(arrNum.sort(arrNum));

const sorted = arrNum.sort(function(a, b){
    if(a > b) return 1;
    if(a === b) return 0;
    return -1;
});

const sorted2 = arrNum.sort( (a,b) => a - b);

console.log(sorted);

const arr = [1,2,3,6];

function doubleArray(numArr){
    let arrResult = [];
    for (var i = 0; i < numArr.length; i++) {
        let result = numArr[i] * 2;
        arrResult.push(result);
    }
    return arrResult;
}

console.log(doubleArray(arr));
// map
const dou = arr.map( e => e*2 );
console.log(dou);
// forEach return undefined
arr.forEach( e => console.log(e) );