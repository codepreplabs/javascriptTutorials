// object decleration as a object literal
var jhon = {
    
    name: 'Jhon',
    yearOfBirth: 1990,
    job: 'teacher'
}

// function constructor
// function constructors are named with a capital letter

var Person = function(name, yearOfBirth, job){
    
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// instantiation
var jhon = new Person('Jhon', 1990, 'teacher');

// adding inheritence using prototype object

Person.prototype.calculateAge = function (){
    console.log(2018 - this.yearOfBirth);
}

jhon.calculateAge();

// adding properties directly to prototype object

Person.prototype.lastName = 'Smith';
console.log(jhon.name + jhon.lastName);