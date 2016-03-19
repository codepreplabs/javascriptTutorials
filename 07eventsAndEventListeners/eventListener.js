// adding an onclick event to the document object
/*document.onclick = function(){
	alert("You clicked on somewhere on the document");
}*/


/*function prepareEventHandlers(){
	var myImage = document.getElementById("codeprep");
	myImage.onclick = function(){
	alert("You clicked on the image");
}
}*/

// there is usually a single onload function in a js file
/*window.onload = function (){
	// call any functions here wher gets called only after the window is completely loaded
	// prepareEventHandlers();
}
*/
var nameField = document.getElementById("name");

nameField.onfocus = function(){
	if(nameField.value == "your name"){
		nameField.value = "";
	}
};

nameField.onblur = function(){
	if( nameField.value == ""){
		nameField.value = "your name";
	}
};
