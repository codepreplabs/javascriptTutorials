// classes 

//ES5

var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    
    var age = new Date().getFullYear = this.yearOfBirth;
    console.log(age);
}

var jhon5 = new Person5('John', 1990, 'teacher');

//ES6
class Person6 {
    
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    
    static greetings(){
        console.log(`This is greeting from static method`);
    }
}

let person = new Person6('John', 1990, 'teacher');
console.log(person);
person.calculateAge(2019);
Person6.greetings();
