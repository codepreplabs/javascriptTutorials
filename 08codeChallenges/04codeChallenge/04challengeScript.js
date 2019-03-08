/*
    Mark and Jhon are trying to compare their BMI (Body mass index) which is calculated using the formula:
    
    BMI = mass / height^2 = mass / (height * height).
    
    mass in kg and height in meter
    
    Print if Mark has higher BMI than John.
*/

function calculateBMI(){
    return this.weight / (this.height * this.height);
}

var mark = {
    name: 'mark',
    weight: 100,
    height: 5,
    bmi: calculateBMI
};

var jhon = new Object();
jhon['name'] = 'jhon';
jhon['weight'] = 85;
jhon['height'] = 4.8;
jhon['bmi'] = calculateBMI;

console.log(mark, jhon);

var marksBMI = calculateBMI(mark.weight, mark.height);
var jhoneBMI = calculateBMI(jhon.weight, jhon.height);

var result = mark.bmi() > jhon.bmi();
console.log("Is Mark's BMI higher than John's ? "+ result)


