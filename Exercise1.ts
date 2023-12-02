//using simple formula
let lengthOfRectangle: number = 10;
let widthOfRectangle: number = 20;
let area: number = lengthOfRectangle * widthOfRectangle;
console.log(`Area of rectangle is:${area}`);

//calculating area using function
function areaOfRectangle(a: number, b: number) {
  let c: number = a * b;
  console.log(`Area of rectangle is:${c}`);
}

//function call
areaOfRectangle(2, 3);
areaOfRectangle(6, 6);
