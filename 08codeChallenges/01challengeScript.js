/*
    Mark and Jhon are trying to compare their BMI (Body mass index) which is calculated using the formula:
    
    BMI = mass / height^2 = mass / (height * height).
    
    mass in kg and height in meter
    
    Print if Mark has higher BMI than John.
*/

var marksWeight = prompt("enter Marks weight in kg :");
var marksHeight = prompt("enter Marks height in m :");

var jhonsWeight = prompt("enter Jhons weight in kg :");
var jhonsHeight = prompt("enter Jhons height in kg :");

var marksBMI = calculateBMI(marksWeight, marksHeight);
var jhoneBMI = calculateBMI(jhonsWeight, jhonsHeight);

var result = marksBMI > jhoneBMI;
console.log("Is Mark's BMI higher than John's? "+ result)
    
    
function calculateBMI(weight, height){
    
    return weight / (height * height);
}