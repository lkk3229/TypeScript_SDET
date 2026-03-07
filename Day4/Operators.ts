let a:number = 10, b:number = 20;

// Arithmetic Operators
console.log("*************Arithmetic Operators*************");
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(b / a); // Division
console.log(b % a); // Modulus
console.log(a ** b); // Exponentiation

//Assignment Operators
console.log("*************Assignment Operators*************");
a += 5; // a = a + 5
console.log("a: ",a); // Output: 15
b *= 2; // b = b * 2
console.log("b: ",b); // Output: 40
a+=b; // a = a + b
console.log("a: ",a); // Output: 55

// Relational/Comparison Operators
//returns boolean - true or false
// >, <, >=, <=, ==, ===, !=, !==
console.log("*************Relational/Comparison Operators*************");
a=10;
b=20;
console.log(a > b); // Output: false, because 10 is not greater than 20
console.log(a < b); // Output: true, because 10 is less than 20
console.log(a >= b); // Output: false, because 10 is not greater than or equal to 20
console.log(a <= b); // Output: true, because 10 is less than or equal to 20
console.log(a == b);  // Output: false, because 10 is not equal to 20 (loose equality, checks value only)
console.log(a === b); // Output: false, because 10 is not equal to 20 (strict equality, checks value and type)
console.log(a != b); // Output: true, because 10 is not equal to 20 (loose inequality, checks value only)
console.log(a !== b); // Output: true, because 10 is not equal to 20 (strict inequality, checks value and type)

//difference between ==(equality) and ===(Strict equality)

let num1:any = 10; // num1 is of type 'any' and holds a number
let num2:any = "10"; // num2 is of type 'any' and holds a string

console.log(num1 == num2); // Output: true, because '==' performs type coercion and considers them equal
//only compares values
console.log(num1 === num2); // Output: false, because '===' does not perform type coercion and considers them different types
// compares both value and type

// Logical Operators - returns true/false (boolean) - works between boolean values
// && (AND), || (OR), ! (NOT)
console.log("*************Logical Operators*************");

let x: boolean = true;
let y: boolean = false;

console.log(x && y); // Output: false, because both x and y need to be true for AND
console.log(x || y); // Output: true, because at least one of x or y is true for OR
console.log(!x);     // Output: false, because NOT inverts the value of x


// combination of logical & relational operators
console.log("*************Combination of Logical & Relational Operators*************");

console.log((a < b) && (x || y)); // Output: true, because (a < b) is true and (x || y) is true
console.log((a > b) || (x && y)); // Output: false, because (a > b) is false and (x && y) is false
console.log(!(a === b) && (x || y)); // Output: true, because !(a === b) is true and (x || y) is true
console.log(20>10 && 10>5); // Output: true, because both conditions are true
console.log(20>10 || 10>15); // Output: true, because at least one condition is true
console.log(!(20>10) || 10>15); // Output: false, because !(20>10) is false and 10>15 is false



