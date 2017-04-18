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

const hoang = new Person('Hoang',35,35000);
hoang.setCash(5000);
hoang.height = '1m72';
hoang.chao = function(){
    console.log('hello world');
}

console.log(hoang.getCash());
hoang.chao();