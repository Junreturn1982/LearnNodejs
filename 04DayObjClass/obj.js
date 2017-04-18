const hoang = {
    name : 'Hoang',
    age : '35'
};

// console.log(hoang.name);

// constructor parttern (function)
function Person(ten, tuoi, friend){
    this.name = ten;
    this.age = tuoi;
    this.friend = friend;
    this.showPerson = function(){
        console.log(this.name+' - '+this.age);
    } 
    this.getAge = function(){
        return this.age; // neu ghi tuoi ko co this
    }
    // method change value property
    this.growUp = function(){
        this.age++;
    }
};

const phat = new Person('Phat', 25, hoang);
// console.log(phat.age);
phat.showPerson();
console.log(phat.getAge());
phat.growUp();
console.log(phat.age);
// get property
console.log(JSON.stringify(phat))

function Point(tungDo, hoanhDo){
    this.tungDo = tungDo;
    this.hoanhDo = hoanhDo;
}
// console.log(new Point(12,22));

