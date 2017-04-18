function add(a,b){
    return a + b;
}

// console.log(add(3,4));

// console.log(console.log(1000));

function giaiThua(num){
    let total = 0;
    for (var i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

console.log(giaiThua(3));

function getTotalLop3(n) {
    let soBatDau = n % 2 === 0 ? 1 : 0;
    let phanTu = soBatDau + n;
    const soCap = Math.ceil(n / 2);
    return phanTu * soCap;
}

console.log(getTotalLop3(3));