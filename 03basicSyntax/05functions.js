function firstFunction(){
	console.log("this is my first function!");
}

firstFunction();

// always define the function and then call them. (functions at the top and calls at the bottom)

function secondFunction(x , y){
	return x * y;
}

var result = secondFunction(5,10);

/* 
    Function staatements and expressions
*/

// function expression --> anything that produces a value 

var whatDoYouDo = function(job, firstName){
    
    switch (job){
    case 'teacher':
    case 'instructor':
        return console.log(firstName + " teaches kids how to code");
    case 'driver':
        return console.log(firstName + " drives a uber in lisbon");
    case 'designer':
        return console.log(firstName + " designs beautiful websites");
    default:
        console.log(firstName + " does something else!");
}

}

// function statement --> anything that produces an action

function whatDoYouDo(job, firstName){
    
}