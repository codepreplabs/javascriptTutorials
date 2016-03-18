// javascript numbers are 64 bit floating point numbers

var one = 5;
var two = 10;
console.log(one + two);

var isNumber = "a";
if(isNaN(isNumber)){
	console.log("Its not a number");
}

// Math object

var x = 200.6;
var y = Math.round(x);
console.log(y);