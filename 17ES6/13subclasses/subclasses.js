// classes 

//ES5

var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

var jhonAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
console.log(jhonAthlete5);

jhonAthlete5.calculateAge();
jhonAthlete5.wonMedal();

//ES6

console.log("--------------------------------- ES6");

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

class Athlete6 extends Person6 {
    
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

let athlete = new Athlete6('Mike', 1999, 'shooting', 3, 5);

console.log(athlete);
athlete.wonMedal();
athlete.calculateAge();