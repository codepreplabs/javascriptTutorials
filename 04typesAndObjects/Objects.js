// Objects is the javascript world can only be seen as containers for variables and functions

var book = new Object (); // this creates a generic object container and sets its value to 
						  // to the variable player
book.name = "javascript";
book.size = "100" // these are called as properties i.e. properties are nothing 
                  //but variables inside the object

// other ways of creating an object
var book = { name: "javascript", size: 100, rating: 5 };

// associating a function with an object
function bookInfo(){
	console.log("the book is: "+this.name+" size: "+this.size);
}

book.info = bookInfo;
book.info();