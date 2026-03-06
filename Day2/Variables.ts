// variable: container which can hold/store some data.

// variable declaration
// 1. var
// 2. let
// 3. const

//specifying data type is optional in TypeScript. 
// If we do not specify data type, then it will be of type 'any' by default.

// Syntax : Keyword variableName: dataType(optional) = value;

// var a: number = 10; // variable declaration with data type
// var b = 20; // variable declaration without data type (type will be 'any')
// var c: string = "Hello"; // variable declaration with data type
// var d = "World"; // variable declaration without data type (type will be 'any')

//var age=30;
//console.log(age); // Output: 30

// var    Vs   let    Vs    const       
    

//var - We do not use this inModern JS/TS. Avoid var because it has function scope and can lead to unexpected behavior due to hoisting and re-declaration issues. It is recommended to use let and const instead for better code clarity and maintainability.
// (var is the old way of declaring variables, let and const are the new ways introduced in ES6)

//let - use let when you need a variable that can change.

//const - use const when the variable value should not change (immutable).
//  It is a good practice to use const by default and only use let when you know the variable's value needs to change.

// 1. Scope - Accessible area of the variable (Functional scope & Block scope):
//========================================================================================

//  var: function-scoped (accessible within the function it is declared in)
//  let: block-scoped (accessible within the block it is declared in)
//  const: block-scoped (accessible within the block it is declared in)

//Example 1 : var (Functional scope)
/*
function varScope() {
    if (true) {
        var msg = "Hello World"; // msg is function-scoped
        //console.log(msg); // Accessible within the function 
    }
     console.log(msg); // Accessible outside the block because var is function-scoped
}

varScope();
*/

//Example 2 : let and const (Block scope)
/*
function blockScope() {
    if (true) {
        let msg = "Hello World";
        const greet="Hello const";
        console.log(msg); // Accessible within the block
        console.log(greet); // Accessible within the block
    }
    //console.log(msg); // Error: msg is not defined (not accessible outside the block)
    //console.log(greet); // Error: greet is not defined (not accessible outside the block)
}

blockScope();
*/

//Example 3 :
/*
function scopeDiff()
{
    if (true) {
        var num1=10;
        let num2=20;
        const num3=30;
        //console.log(num1);
        //console.log(num2);
        //console.log(num3);
    }
    console.log(num1); // Accessible because var is function-scoped
    //console.log(num2); // Error: num2 is not defined (not accessible outside the block)
    //console.log(num3); // Error: num3 is not defined (not accessible outside the block)
} 
scopeDiff();  
*/

// 2. Declaration / Value Assignment
//========================================================================================

//Example 1 : var can be declared without initialisation
/*
var x; // Declaration without initialization
console.log(x); // Output: undefined    
x = 10; // Value assignment
console.log(x); // Output: 10
*/

//Example 2: let can be declared without initialisation
/*
let y; // Declaration without initialization
console.log(y); // Output: undefined
y = 20;
console.log(y); // Output: 20
*/

// Example 3: const must be initialized at the time of declaration
/*
const z; // Not correct - Error: Missing initializer in const declaration
const z = 30; // Correct - const must be initialized at the time of declaration
console.log(z);
z = 30; // This line will not execute due to the error above
console.log(z);
*/


//3. Re-declaration

//var - allows the re-declaration
// let and const - do not allow re-declaration (making code safer)

//Example 1 : var allows re-declaration
/*
var city = "New York";
var city = "Los Angeles";
console.log(city); // Output: Los Angeles (the second declaration overwrites the first one)
*/

//Example 2 : let does not allow re-declaration
/*
let country = "USA";
//let country = "Canada"; // Error: Identifier 'country' has already been declared
console.log(country);
*/

//Example 3 : const does not allow re-declaration
/*
const pi = 3.14;
//const pi = 3.14159; // Error: Identifier 'pi' has already been declared
console.log(pi);
*/

//4. Re-initialization / Re-assignment
// var and let allow re-assignment,
// const does not allow re-assignment (making it immutable) (only constants allowed - cannot change the value)

//Example 1 : var allows re-assignment
/*
var score = 100;
console.log(score); // Output: 100  
score = 150; // Re-assignment
console.log(score); // Output: 150
*/

//Example 2 : let allows re-assignment
/*
let level = 1;
console.log(level); // Output: 1
level = 2; // Re-assignment
console.log(level); // Output: 2
*/

//Example 3 : const does not allow re-assignment
/*
const pi = 3.14;
console.log(pi); // Output: 3.14
//pi = 3.14159; // Error: Assignment to constant variable
*/

//5. Hoisting - var (Hoisted with undefined) , let and const (not Initialized, Temporal Dead Zone)
/*
console.log(a); // Output: undefined (due to hoisting, var declarations are hoisted to the top of their scope)
 var a = 10; // Declaration and initialization
console.log(a); // Output: 10
*/

/*
console.log(b); //Output: undefined, Error: Cannot access 'b' before initialization (let and const are not hoisted in the same way as var)
let b = 20; 
console.log(b); // Output: 20
*/

/*
console.log(c); // Output: undefined, Error: Cannot access 'c' before initialization (let and const are not hoisted in the same way as var)
const c = 30; 
console.log(c); // Output: 30
*/

