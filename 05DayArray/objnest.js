function Person(name,age,cash){
 this.name = name;
 this.age = age;
 this.getCash = function(){
     return cash;
 }
 this.setCash = function(c){
     if( c > 0)
        cash = c;
 }
}

function Receipt(id,maHoaDon){
 this.id = id;
 this.maHoaDon = maHoaDon;
}

let hoang = new Person('Hoang',35);

let hoangReceipt = [];

for (var i = 1; i < 5; i++) {
    hoangReceipt.push(new Receipt(i,'HD0'+i)); 
}

hoang.receipt = hoangReceipt;

console.log(JSON.stringify(hoang));