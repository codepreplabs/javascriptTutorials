// default parameters

//ES5
function SmithPerson (firstName, yearOfBirth, lastName, nationality){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName === undefined ? 'Smith' : lastName;
    this.nationality = nationality === undefined ? 'US' : nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);

//ES6
function SmithPerson (firstName, yearOfBirth, lastName = 'Smith', nationality = 'American'){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
