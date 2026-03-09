// Anonymous Function (Unnamed function/ Nameless Function)

/*
An anonymous function is a function that does not have a name.
Instead, it is assigned to a variable , which act as its name.
It is often used as a callback function or as an argument to another function.
Anonymous functions can be defined using the function expression syntax or the arrow function syntax.


Syntax:

let variable= function(parameters) {
    // function body
};
variable(); // calling the function using the variable name

*/

// Example 1 : Anonymous Function 

let msg = function(): string
{
    return "Hello, World!";
}

console.log(msg()); // Output: Hello, World!

// Example 2 : Anonymous Function with parameters 
let multiply = function(a: number, b: number): number
{
    return a * b;
}
console.log(multiply(5, 3)); // Output: 15

// Example 3 : Anonymous Function with Rest parameters

let calculateSum = function(...numbers: number[]): number       
{
    let total: number = 0;
    for (let i = 0; i < numbers.length; i++)
    {
        total += numbers[i];
    }
    return total;
}   

console.log(calculateSum(1, 2, 3, 4, 5)); // Output: 15
console.log(calculateSum(10, 20)); // Output: 30
console.log(calculateSum(5)); // Output: 5

// Example 4 : Anonymous Function with multiple types of parameters

let countElements = function(...elements: (number | string)[]): number
{
    return elements.length;
}
console.log(countElements(1, "Hello", 3, "World")); // Output: 4
console.log(countElements(10, 20)); // Output: 2
console.log(countElements("TypeScript", "JavaScript")); // Output: 2

// Example 5 : Anonymous Function with optional parameters

let showDetails = function(id: number, name: string, mailId?: string): void
{
    console.log("ID:", id);
    console.log("Name:", name);
    console.log("Mail ID:", mailId);
    if (mailId) {
        console.log("Mail ID is provided.");
    } else {
        console.log("Mail ID is not provided.");
    }       
}
showDetails(1, "John"); // Output: ID: 1, Name: John, Mail ID: undefined, Mail ID is not provided.
showDetails(2, "Jane", "jane@example.com"); // Output: ID: 2, Name: Jane, Mail ID: jane@example.com, Mail ID is provided.   
showDetails(3, "Alice", ""); // Output: ID: 3, Name: Alice, Mail ID: , Mail ID is not provided.

/*
In the above examples, we have defined anonymous functions and assigned them to variables (msg, multiply, calculateSum, countElements, showDetails). 
We can call these functions using the variable names, just like we would with named functions. 
Anonymous functions are useful when we want to create a function on the fly or when we want to pass a function as an argument to another function without needing to name it.   

*/
