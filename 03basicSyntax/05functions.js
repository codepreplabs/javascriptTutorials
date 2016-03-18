function firstFunction(){
	console.log("this is my first function!");
}

firstFunction();

// always define the function and then call them. (functions at the top and calls at the bottom)

function secondFunction(x , y){
	return x * y;
}

var result = secondFunction(5,10);