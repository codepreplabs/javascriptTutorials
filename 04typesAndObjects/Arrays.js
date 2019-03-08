var array = []; // array decleration

array[0] = 1;
array[1] = "two";
array[2] = true;

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

// multiple other ways of declaring an array

var firstType = [];
var secondType = new Array();
var thirdType = Array();
var multipleValues = Array(5);

// Arrays is javascript can be created with a fixed size but normally when no size
// attribute is set they dynamically resize.

// methods of an array

var jhon = ['Jhon', 'Smith', 1990, 'teacher', false];

console.log('no operations :', jhon);

// used to add an element to the array
jhon.push('blue');
console.log('pushed blue', jhon);

// adds an element to the first of the array
jhon.unshift('Mr.');
console.log('after unshift', jhon);

// removes an element from the start of the array
jhon.shift();
console.log('shift executed : ', jhon);

// used to remove the last element of an array
jhon.pop();
console.log('after pop :', jhon);

// indexOf returns the position of the arument to the method inside the array
console.log('index of teacher : ', jhon.indexOf('teacher'));