var fname = "Gabriel";
var lname = "Portillo";
var mName = "Martinez";
var age = 30;

let x = 5;
let y = 10;
let sumOfTwoNumbers = x + y;

let poem = `Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you.`;

const cars = ["Toyota", "Honda", "Ford"];  
cars[0] = "Chevrolet";
cars[1] = "Ferrari";
cars[2] = "Tesla";

let carsShow = [ "Chevrolet", "Ferrari", "Tesla" ];
carsShow[0] = "Lamborghini";
carsShow[1] = "Porsche";
carsShow[2] = "Bugatti";

let isStudent = true;
let score = 88;
let name = "Leo";
let hobbies = ["coding", "gaming"];
let person = { age: 22, gender: "male" };

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


console.log(poem);

console.log(typeof isStudent); // boolean
console.log(typeof score);     // number
console.log(typeof name);      // string
console.log(typeof hobbies);   // object (arrays are technically objects)
console.log(typeof person);    // object

//  Automatic Type Conversion
let result1 = '5' + 2;      // "52" (number 2 is converted to string)
let result2 = '5' - 2;      // 3 (string '5' is converted to number)
let result3 = true + 1;     // 2 (true is converted to 1)
let result4 = null + 1;     // 1 (null is converted to 0)

// Explicit Type Conversion (Type Casting)

// String() — Convert to String
String(123);        // "123"
String(true);       // "true"
String(null);       // "null"
String([1,2,3]);    // "1,2,3"
// Number() — Convert to Number
Number("123");      // 123
Number("123.45");   // 123.45
Number(true);       // 1
Number(false);      // 0
Number("abc");      // NaN
// Boolean() — Convert to Boolean
Boolean(0);         // false
Boolean(1);         // true
Boolean("");        // false
Boolean("hello");   // true
Boolean(null);      // false
// parseInt() — Parses and returns an integer
parseInt("123");        // 123
parseInt("123abc");     // 123
parseInt("abc123");     // NaN
parseInt("12.34");      // 12
// parseFloat() — Parses and returns a floating-point number
parseFloat("123.45");       // 123.45
parseFloat("123.45abc");    // 123.45
parseFloat("abc123.45");    // NaN
