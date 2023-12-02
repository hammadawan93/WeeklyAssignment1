"use strict";
//using simple formula
let lengthOfRectangle = 10;
let widthOfRectangle = 20;
let area = lengthOfRectangle * widthOfRectangle;
console.log(`Area of rectangle is:${area}`);
//calculating area using function
function areaOfRectangle(a, b) {
    let c = a * b;
    console.log(`Area of rectangle is:${c}`);
}
//function call
areaOfRectangle(2, 3);
areaOfRectangle(6, 6);
