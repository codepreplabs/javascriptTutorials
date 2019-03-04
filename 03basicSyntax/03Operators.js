// = assignment operator

var score = score + 20;
// or use the shorthand

var score *= 10;

// other common short hands are +=, -=, *=, /=

// Operator precedence

result = 5 + 5 * 10;
result = (5 + 5) * 10;

// Comparison operator

if ( a == b ){
	alert("YES a is equal to b");
}

// = assignment operator
// == equality operator
// === strict equality operator

var a = 10;
var b = "10";

if( a === b ){
 alert("a and b are equal");
}else{
  alert("a and b are not equal!");
}

// == checks for the value and returns the response
// === checks the value and the datatype and then returns the response

// ==, !=, !==, ===, >, <, >=, <=

// logical operators
// && logical and
// || logical or

if((a > b) && (c < d)){
	alert("YES");
}

// modulus operator: returns the remainder of the division operation

var sum = 200;
var remainder = sum % 2;

// increment and decrement operator

var a;
a++;

var b;
++b;

// ternary operators
//condition ? true : false

var one = 500;
var two = 600;

var three = one < two ? one : two;

// typeof operator
console.log(typeof one);