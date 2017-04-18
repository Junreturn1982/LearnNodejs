class Person{
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

}

const teo = new Person('teo',12,25);
const ti = new Person('ti',13,27);
const tun = new Person('tun',14,24);

const arrPerson = [teo,ti,tun];
// one object
const findPerson = arrPerson.find( (e) => { return e.height > 26;});
// one value
const findIdPerson = arrPerson.findIndex( e => e.height > 25 );

console.log(findPerson);
console.log(findIdPerson);
// filter
const filterPerson = arrPerson.filter( (e) => { return e.height > 25;});
console.log(filterPerson);
// sort
const sorted = arrPerson.sort( (p1,p2) => p1.height - p2.height);
console.log(sorted);