// Named Function : A function that has a name and can be called by that name.

// Syntax
/*
function functionName(parameter): returnType
 {
    // function body
}   
*/

// Example 1 : Name Function with no parameters and no return type

function greet(): void
{
    console.log("Hello, World!");
} 
greet(); // Output: Hello, World!

// Example 2 : Named Function with parameters and return type

function add(a: number, b: number): number  
{
    return a + b;
}
console.log(add(5, 3)); // Output: 8    

// Example 3 : Named Function with Rest parameters ==> rest parameters donot restrict the number of arguments passed to the function

function sum(...numbers: number[])
{
    let z;
    let total:number = 0;
    for (z=0; z < numbers.length; z++)
    {
        total = total + numbers[z];
    }
   console.log("Total is : " , total);
}

sum(1, 2, 3, 4, 5); // Output: Total is : 15
sum(10, 20); // Output: Total is : 30
sum(5); // Output: Total is : 5

// Example 4 : named function with Rest parameters - multiple types of parameters

function findElemnets(...elements: (number | string)[]):number
{
    return elements.length;
}
console.log(findElemnets(1, "Hello", 3, "World")); // Output: 4
console.log(findElemnets(10, 20)); // Output: 2
console.log(findElemnets("TypeScript", "JavaScript")); // Output: 2

// Example 5 : Named Function with optional parameters

function displayDetails(id: number, name: string, mailId?: string): void    // mailId is an optional parameter by using "?" symbol
{
    console.log("ID:", id);
    console.log("Name:", name);
    console.log("Mail ID:", mailId); // This will print "Mail ID: undefined" if mailId is not provided
    if (mailId) {
        console.log("Email:", mailId);
    }
}
displayDetails(1, "John"); // Output: ID: 1, Name: John
displayDetails(2, "Jane", "jane@example.com"); // Output: ID: 2, Name: Jane, Email: jane@example.com

// Example 6 : Named Function with default parameters

function calculateArea(radius: number, pi: number = 3.14): number   // pi is a default parameter with a default value of 3.14       
{
    return pi * radius * radius;
}
console.log(calculateArea(5)); // Output: 78.5 (using default value of pi)
console.log(calculateArea(5, 3.14159)); // Output: 78.53975 (using provided value of pi)

