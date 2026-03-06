// js is Dynamically Typed Programming Language

/*
let age = 25; // number

console.log(typeof(age)); // Output: number

age = "twenty five"; // string

console.log(typeof(age)); // Output: string
console.log(age); // Output: twenty five

// In JavaScript, you can change the type of a variable at runtime, which is why it's called a dynamically typed language. This flexibility allows you to assign different types of values to the same variable without any errors. 
*/

//Type Safety - Not Allowed in JS but Allowed in TS

let message = "Hello, World!"; // string
let count = 10; // number

message = 123; 
count = "ten"; 

console.log(message); // Output: 123
console.log(count); // Output: ten

let result="50" + 10; // string concatenation
console.log(result); // Output: "5010"