var year = 2011;

// rules for variable decleration
// cant start the variable decleration with numbers
// it can start with letters, underscore, dollar sign etc.
// we cannot use reserved javascript keywords as variable names.


// variables are case sensitive.

var date, year, month; // we can declare multiple variables with a single var declerations.

var date = '3/18/2016', year = 2016, month = 3;

// variables can hold many things strings, integers, arrays, functions etc
// There is no strict type safety in javascript.

console.log(date, year, month);

// Javascript has a feature called dynamic typing. i.e. we do not have to define the datatype of a variable as other staticly typed languages.

var fullAge = true;
console.log(fullAge);

// Variables need to be given meaningful names. camelCase notations are used for naming variables.

var job;
console.log(job);

// undefined is what a variable is when uninitialized.