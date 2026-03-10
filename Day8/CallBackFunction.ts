// A callback function : A function passed as an argument to another function and executed later.

// Syntax
/*
function higherOrderFunction(callback: () => void): void {
    // Some code
    callback(); // Call the callback function
}   
*/

// Example 1 :
//Function that takes callback function as an parameter
function greet(name:string, callback:(message: string) => void)
{
    console.log(name);
    callback("Hello, " + name + "!");  //executing the callback function with a message
}


//Callback Function 
function showMessage(message: string)
{
    console.log(message);
}

//calling the function by passing the callback function
greet("John", showMessage); // Output: Hello, John!

//Example 2:

function sum(a:number, b:number, callback:(result: number) => void): void
{
    const result = a + b;
    callback(result); // Call the callback function with the result
}


//callback function to handle the result
function displayResult(result: number):void
{
    console.log("The sum is: " + result);
}

sum(5, 10, displayResult); // Output: The sum is: 15


