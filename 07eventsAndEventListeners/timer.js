function simpleMessage(){
	alert("this is a message");
}

// setTimeout(simpleMessage, 5000);

var myImage = document.getElementById("codeprep");
var imageArray = ["gangnamcat.PNG", "labtocat.PNG", "codeprep.PNG"];
var imageIndex = 0;

function changeImage(){
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if(imageIndex >= imageArray.length){
		imageIndex = 0;
	}
}

setInterval(changeImage, 5000);