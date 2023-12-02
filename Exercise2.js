"use strict";
//calculating volume using simple formula
let sideLength = 3;
let volume = sideLength * sideLength * sideLength;
console.log(`Volume of the cube is:${volume}`);
//calculating volume using function
function volumeOfCube(a) {
    let b = a * a * a;
    console.log(`Volume of the cube is:${b}`);
}
//function call
volumeOfCube(5);
volumeOfCube(9);
