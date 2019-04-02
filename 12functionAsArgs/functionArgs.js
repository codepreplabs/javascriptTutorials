// Function as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 - el;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

// Functions as return types

function interviewQuestion(job) {
    
    if(job === 'designer'){
       
        return function(name){
            console.log(name + ', can you please tell me what is UX design?')
        }
    }
    else if (job === 'teacher'){
          
        return function(name){
            console.log(name + ' what subject do you teach?');
        }
    }
    else {
        
        return function(name){
            console.log('Hello' + name + ', what do you do ?');
        }     
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

interviewQuestion('teacher')('Mark');