var element = document.getElementById("options");
console.log("the node type: "+element.nodeType);
console.log("the Inner HTML: "+element.innerHTML);
console.log("child nodes: "+element.childNodes.length);

var tags = document.getElementsByTagName("li");
console.log("the number of lists: "+tags.length);