const KetQua = 457892;

let soMua = Math.floor((Math.random() * 1000000) - 1);
let soLan = 1;
console.log('lan thu: '+soLan+ " : "+soMua);
while(soMua != KetQua){
    soLan++;
    soMua = Math.floor((Math.random() * 1000000) - 1);
    console.log('lan thu: '+soLan+ " : "+soMua);
}
console.log('lan thu: '+soLan+' trung giai')
