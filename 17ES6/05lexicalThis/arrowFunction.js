//ES5

/*
var box5 = {
    color:'green',
    position: 1,
    clickme: function(){
        
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it is '+ self.color;
            alert(str);
        });
    }
}


box5.clickme();

*/

//ES6

var box6 = {
    color:'green',
    position: 1,
    clickme: function(){
        
        document.querySelector('.green').addEventListener('click', () => {
            var str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        });
    }
}

box6.clickme();

// Using function constructor

function Person(name){
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends){
    
    var arr = friends.map(function(el){
        return this.name + ' is friends with '+ el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
var person = new Person('John').myFriends5(friends);

//ES6
Person.prototype.myFriends5 = function(friends){
    
    var arr = friends.map((el) => {
        return this.name + ' is friends with '+ el;
    });
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
var person = new Person('Mike').myFriends5(friends);
