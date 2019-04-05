// bind, call and apply functions

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
           console.log('Good ' + timeOfDay +' Ladies and gentlemen! I\'m '
                      +this.name + ', I\'m a '
                      +this.job + ' and I\'m '
                      +this.age + ' years old! Have a nice '
                      +timeOfDay + '.')
           }
        else if(style === 'friendly'){
           console.log('Good ' + timeOfDay +' Whats up? I\'m '
                      +this.name + ', I\'m a '
                      +this.job + ' and I\'m '
                      +this.age + ' years old! Have a nice day '
                      +timeOfDay + '.')
           }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

// john.presentation('formal', 'morning');

// example on use of call method

// john.presentation.call(emily, 'formal', 'evening');

// example on use of apply method

// john.presentation.apply(emily, ['friendly', 'afternoon']);

// Bind dosent call the function immediately instead it 
// generates a copy of the function so that it can be stored
// somewhere

// bind allows us to preset an argument

// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('morning');
