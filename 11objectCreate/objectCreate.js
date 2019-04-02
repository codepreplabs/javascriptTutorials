// 1. We create the prototype object

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

// 2. Using the prototype object we can create a object

var john = Object.create(personProto);
john.name = 'Jhon';
john.yearOfBirth = 1990;
john.job = 'teacher';

// 3. Using the Object.create() method we can use prototype and also pass the values to the object

var jane = Object.create(personProto, {
    
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'sesigner'}
});

console.log(john);
console.log(jane);