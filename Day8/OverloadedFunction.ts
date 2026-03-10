// step 1: write a signatures of functions

//step 2: implement a function

//step 3: call the function

// Example 1 : Function Overloading - different parameter types

function getInfo(id: number): string;
function getInfo(name: string): string; 

function getInfo(param: number | string): string
{
    if (typeof param === "number") {
        return(`ID: ${param}`);
    } else {
        return(`Name: ${param}`);
    }
} 

console.log(getInfo(123)); // Output: ID: 123
console.log(getInfo("Alice")); // Output: Name: Alice    

// Example 2 : Function Overloading - different number of parameters

function calculateArea(radius: number): number;
function calculateArea(length: number, width: number): number; 

function calculateArea(param1: number, param2?: number): number
{
    if (param2 === undefined) {
        return Math.PI * param1 * param1; // Area of a circle
    } else {
        return param1 * param2; // Area of a rectangle
    }       
}

console.log(calculateArea(5)); // Output: 78.53981633974483 (Area of a circle with radius 5)
console.log(calculateArea(4, 6)); // Output: 24 (Area of a rectangle with length 4 and width 6) 

// Example 3 : Function Overloading - different return types

function processData(data: string): string;
function processData(data: number): number;

function processData(data: string | number): string | number
{
    if (typeof data === "string") {
        return `Processed string: ${data.toUpperCase()}`;
    } else {
        return data * 2; // Example processing for number
    }
}

console.log(processData("Hello")); // Output: Processed string: Hello
console.log(processData(10)); // Output: 20

// Example 4 : Function Overloading - different parameter types and return types

function formatValue(value: string): string;
function formatValue(value: number): number;
function formatValue(value: boolean): boolean;

function formatValue(value: string | number | boolean): string
{
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return `You are ${value * 2} years old`;
    } else {
        let result = value? "Married" : "Single";
        return result;
    }
}

console.log(formatValue("hello")); // Output: HELLO
console.log(formatValue(5)); // Output: You are 10 years old
console.log(formatValue(true)); // Output: Married
console.log(formatValue(false)); // Output: Single


