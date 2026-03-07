// Types/DataType

/* 
1. Premitive Data Types(Built-in Data Types) - Store single value
- number
- string
- boolean
- null
- undefined
- any
- void
- Union type

2. Non-Premitive Data Types(Object Data Types) - Store multiple values
- Array
- class
- Function
- Interface
- Tuple
- Enum
- Object etc...
*/

// 1. Number type : Represents both integer and floating-point numbers.

/*
let age:number = 25;
let price = 19.99;
let big= 12345678901234567890n; // BigInt for large integers

console.log("Age: ",age); // Output: 25
console.log("Price: ",price); // Output: 19.99
console.log("BigInt: ",big); // Output: 12345678901234567890n

console.log("Type of age: ",typeof(age)); // Output: number
console.log("Type of price: ",typeof(price)); // Output: number
console.log("Type of big: ",typeof(big)); // Output: bigint 
*/

// 2. String type : Represents a sequence of characters.

/*
1. SingleQuotes(' ')
2. DoubleQuotes(" ")
3. TemplateStrings or Backtick(` `)
*/

let firstname:string = "John";
let lastname:string = 'Smith';
// Hello, John Smith
let greeting:string = `Hello, ${firstname} ${lastname}`; // Template string with interpolation


console.log(greeting); // Output: Hello, John Smith

// 3. Boolean type : Represents a logical value that can be either true or false.

/*
let isActive:boolean = true;
let isLoggedIn:boolean = false;

console.log("Is Active?: ",isActive); // Output: true
console.log("Is Logged In?: ",isLoggedIn); // Output: false
*/

// 4. Null and Undefined types : Represents the absence of a value or an uninitialized variable.

/*
let data1:null = null;
let data2:undefined = undefined;

console.log("Data1: ",data1); // Output: null
console.log("Data2: ",data2); // Output: undefined

console.log("Type of data1: ",typeof(data1)); // Output: object (this is a quirk in JavaScript)
console.log("Type of data2: ",typeof(data2)); // Output: undefined
*/

// 5. Any type : Represents any value and can be used when you want to opt-out of type checking.

/*
let data:any = 25;  // data can hold any type of value, and TypeScript will not perform type checking on it.
console.log("Data: ",typeof(data));
console.log("Data: ",data); // Output: 25       

data = "twenty five"; // Now data holds a string value, and this is perfectly valid with the 'any' type.
console.log("Data: ",typeof(data));
console.log("Data: ",data); // Output: twenty five
*/

// 6. Union type : Represents a value that can be one of several types. - Combine multiple types using the pipe (|) operator.

/*
let data: number | string | boolean; // data can be either a number, a string, or a boolean
data = 25; // Valid, data is a number
console.log("Data: ",typeof(data));
console.log("Data: ",data); // Output: 25

data = "twenty five"; // Valid, data is now a string
console.log("Data: ",typeof(data));
console.log("Data: ",data); // Output: twenty five

data = true; // Valid, data is now a boolean
console.log("Data: ",typeof(data));
console.log("Data: ",data); // Output: true
*/

// 7. Void type : Represents the absence of a value, typically used for functions that do not return anything.

/*

function show():void
{
    console.log("This function does not return anything.");
}
*/

/*
function sum(x:number, y:number): number
{
    return x+y;
}

let res:number = sum(5,10);
console.log("Result: ",res); // Output: 15
    
*/

