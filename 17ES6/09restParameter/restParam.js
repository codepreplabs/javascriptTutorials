// REST parameters

//ES5

function isFullAge5(){
    
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(cur){
       console.log((2016 - cur) >= 18); 
    });
}

//isFullAge5(1990, 1999, 1965);

//ES6 function using REST parameters

function isFullAge6(...years){
    
    years.forEach((cur) => console.log((2016 - cur) >= 18))
}

isFullAge6(1990, 1999, 1965);