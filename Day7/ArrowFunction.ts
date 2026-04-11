// Arrow functions/Lamda functions

/*
Lamda refers to anonymous functions in programming.
Lamda functions are a consise mechnism to represent anonymous functions.
These functions are also called as Arrow functions because of the use of "=>" syntax.

Arrow functions, also known as lambda functions, are a concise way to write functions in TypeScript.
They are often used for short, single-expression functions and can help improve readability.

There are 3 parts to a Lamda function:

1. Parameters: A function may optionally have parameters

2. Arrow (=>): the fat arrow notation/lamda(=>) - It is also called as the "goes to operator"
3. Function Body: represent the functions Instructions set

Syntax:

let variable = (parameters) =>
 {
    // function body
}
    variable(); // calling the function using the variable name

Or for single expression functions:
========================================

let variable = (parameters) => expression; // Implicit return for single expression functions
    variable(); // calling the function using the variable name
*/

// Example 1 : Arrow Function with no parameters and no return type

let greet1 = (): void =>
{
    console.log("Hello, World!");
}
greet1(); // Output: Hello, World!

// Example 2 : Arrow Function with parameters and return type

let add1 = (a: number, b: number): number =>
{
    return a + b;
}
console.log(add1(5, 3)); // Output: 8

// Example 3 : Arrow Function with Implicit return

let multiply1 = (a: number, b: number): number => a * b; // Implicit return for single expression functions
console.log(multiply1(5, 3)); // Output: 15
let square = (x: number): number => x * x; // Implicit return for single expression functions
console.log(square(4)); // Output: 16

// Example 4 : Arrow Function with optional parameters
let displayDetails1 = (id: number, name: string, mailId?: string): void =>    //when 1st parameter is optional then all the parameters after that should also be optional
{
    console.log("ID:", id); 
    console.log("Name:", name);
    console.log("Mail ID:", mailId); // This will print "Mail ID: undefined" if mailId is not provided
}   
displayDetails1(1, "John Doe"); // Output: ID: 1, Name: John Doe, Mail ID: undefined
displayDetails1(2, "Jane Doe", "jane.doe@example.com"); // Output: ID: 2, Name: Jane Doe, Mail ID: jane.doe@example.com

// Example 5 : Arrow Function with default parameters
let calculateArea1 = (radius: number, pi: number = 3.14): number =>
{
    return pi * radius * radius;
}   
console.log(calculateArea1(5)); // Output: 78.5 (using default value of pi)
console.log(calculateArea1(5, 3.14159)); // Output: 78.53975 (using provided value of pi)

// Example 6 : Arrow Function with Rest parameters  
let calculateSum1 = (...numbers: number[]): number =>
{
    let total: number = 0;
    for (let i = 0; i < numbers.length; i++)
    {       
         total += numbers[i];
    }   
    return total;
}   
console.log(calculateSum1(1, 2, 3, 4, 5)); // Output: 15
console.log(calculateSum1(10, 20)); // Output: 30
console.log(calculateSum1(5)); // Output: 5



