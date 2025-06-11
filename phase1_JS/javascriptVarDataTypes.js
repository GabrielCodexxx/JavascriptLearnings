var fname = "Gabriel";
var lname = "Portillo";
var mName = "Martinez";
var age = 30;

let x = 5;
let y = 10;
let sumOfTwoNumbers = x + y;



const cars = ["Toyota", "Honda", "Ford"];  
cars[0] = "Chevrolet";
cars[1] = "Ferrari";
cars[2] = "Tesla";

let carsShow = [ "Chevrolet", "Ferrari", "Tesla" ];
carsShow[0] = "Lamborghini";
carsShow[1] = "Porsche";
carsShow[2] = "Bugatti";

var fullName = fname + " " + mName + " " + lname;

console.log(fullName);
console.log(`Hello, my name is ${fullName} and I am ${age} years old.`);
console.log(`Hello, my name is ${fullName.trim().toUpperCase()} and I am ${age} years old.`);
console.log(`Hello, my name is ${fullName.trim()} and I am ${age} years old.`);

console.log(sumOfTwoNumbers);
console.log(`The sum of ${x} and ${y} is: ${sumOfTwoNumbers}`);
console.log(`The sum of ${x} and ${y} is: ${sumOfTwoNumbers.toString()}`);

console.log(cars);
console.log(carsShow);