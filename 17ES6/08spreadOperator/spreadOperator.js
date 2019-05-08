// spread operator

function addFourAges(a, b, c, d){
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21, 30];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

//spread operator can be used to combine elements of an array

const familySmith = ['Jhon','Jane','Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

//spread operator can be applied on objects as well
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');