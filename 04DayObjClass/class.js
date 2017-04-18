// class ko khai bao function
class Person {
    constructor(name, age, wife){
        this.name = name;
        this.age = age;
        this.wife = wife;
    }

    show() {
        console.log(this.name + ' - '+this.age);
    }

    getAge() {
        return this.age;
    }

    growUp() {
        this.age++;
    }
}

const huong = {
    name : 'Huong',
    age : '25'
};

let hoang = new Person('Hoang',35,huong);
console.log(hoang);