// if condition

// Example 1 : if age is greater than or equal to 18, print "You are an adult."
let age: number = 20;

if (age >= 18) {
    console.log("You are an adult.");
} 

// if else condition

// Example 2 : if age is greater than or equal to 18, print "You are an adult." else print "You are a minor."
age = 16;

if (age >= 18) {
    console.log(`${age} You are an adult.`);
} else {
    console.log(`${age} You are a minor.`);
}  

// Nested if else
// Example 3 : if age is greater than or equal to 18, print "You are an adult." else if age is greater than or equal to 13, print "You are a teenager." else print "You are a child."
age = 15;       

if (age >= 18) {
    console.log(`${age} You are an adult.`);
} else if (age >= 13 && age < 18) {
    console.log(`${age} You are a teenager.`);
} else {
    console.log(`${age} You are a child.`);
}

// Example 4 : Browser selection
let browser: string = "Chrome";

if (browser === "Chrome") {
    console.log("You are using Chrome.");
} else if (browser === "Firefox") {
    console.log("You are using Firefox.");
} else if (browser === "Safari") {
    console.log("You are using Safari.");
} else {
    console.log("You are using an unsupported browser.");
}

// Switch case statement

// Example 5 : Day of the week
let day: number = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//Example 6 : The switch statement can also include an expression

let s: number = 10, t: number = 5;

switch (s - t) 
    {
    case 0: console.log("Result Zero");
        break;
    case 5: console.log("Result Five");
        break;  
    case 10: console.log("Result Ten");
        break;
    default: console.log("Result is not Zero, Five or Ten");
    }
