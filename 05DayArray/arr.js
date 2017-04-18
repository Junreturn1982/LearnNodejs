class Person{
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

}

const teo = new Person('teo',12,25);
const ti = new Person('ti',13,26);
const tun = new Person('tun',14,27);

const arrPerson = [teo,ti,tun];

// function conditionAge(arrPerson, conditionAge){
//     for (var i = 0; i < arrPerson.length; i++) {
//         if(arrPerson[i].age == conditionAge)
//             return true;
//     }
//     return false;
// }

// console.log(conditionAge(arrPerson,25));
// method some of array, validate in array, kiem tra ton tai 1 phan tu
const isBiggerThan12 = arrPerson.some(function(element){
    if(element.age > 12) 
        return true;
    return false;

    // return element.age > 12;
});
// arrow function: () => {} 
const isBiggerThan15 = arrPerson.some(person => person.age > 15);

console.log(isBiggerThan12);
// kiem tra gap thoa dieu kien tra ve
const isTall = arrPerson.every(function(element){
    return element.height > 100;
});
console.log(isTall);