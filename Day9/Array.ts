/*
Arrays in TypeScript
====================

- An array is a special type of variable that stores mutiple values.
- The values can be of the same type or different types.
- Arrays are declared using `[]` or the generic `Array<T>` syntax.
- Indexes of an array start from 0.
- Arrays are an ordered collection of elements.
*/

// Approach 1: using literal

let names: string[] = [];   // Declaring an empty array of strings

//Initializing/assigning the array with values
names[0]= "Alice";
names[1]= "Bob";
names[2]= "Charlie";
console.log(names); // Output: ["Alice", "Bob", "Charlie"]

let names2:string[] = ["Alice", "Bob", "Charlie", "John"]; // Declaring and initializing an array of strings
console.log(names2); // Output: ["Alice", "Bob", "Charlie", "John"]


// Approach 2: using generic Array<T> syntax

let empNames: Array<string> = ["Alice", "Bob", "Charlie", "John"]; // Declaring and initializing an array of strings using generic syntax
console.log(empNames); // Output: ["Alice", "Bob", "Charlie", "John"]

let empAges: Array<number> = [25, 30, 35, 40]; // Declaring and initializing an array of numbers using generic syntax
console.log(empAges); // Output: [25, 30, 35, 40]

let mixedArray: Array<string | number> = ["Alice", 25, "Bob", 30]; // Declaring and initializing an array with mixed types using generic syntax
console.log(mixedArray); // Output: ["Alice", 25, "Bob", 30]

let mixedData:Array<any> = ["Alice", 25, true, {name: "Bob"}, [1, 2, 3]]; // Declaring and initializing an array with any type using generic syntax
console.log(mixedData); // Output: ["Alice", 25, true, {name: "Bob"}, [1, 2, 3]]
console.log(mixedData[3].name); // Output: Bob (Accessing the name property of the object in the array)
console.log(mixedData[4][1]); // Output: 2 (Accessing the second element of the array in the mixedData array)
console.log(mixedData[2]); // Output: true (Accessing the boolean value in the mixedData array)

// Example 1: Iterating over an array using a traditional for loop
console.log("empNames...............");
for (let i = 0; i < empNames.length; i++) {
    console.log(empNames[i]);
}

// Example 2: Iterating over an array using a 'for...in' loop (indexes)
console.log("empAges.................."); 
for (let index in empAges) {
    console.log(empAges[index]);
}

// Example 3: Iterating over an array using a 'for...of' loop (values)
console.log("mixedData.....................");
for (let name of mixedData) {
    console.log(name);
}

// Example 4: Passing an Array to the Function
// Search an element in an array using a function

function searchElement(arr: number[], target: number): boolean
{
    for (let num of arr) {
        if (num === target) {
            return true; // Element found
        }
    }   
    return false; // Element not found
}

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(searchElement(numbers, 3)); // Output: true
console.log(searchElement(numbers, 6)); // Output: false

// Example 5: A functions takes an Array an7d returns an Array
function capitalizeWords(arr: string[]): string[]
{
    let capitalized: string[] = []; 
    for (let word of arr) {
        capitalized.push(word.toUpperCase()); // Capitalizing each word and adding to the new array
    }
    return capitalized; // Return the new array with capitalized values
}

let originalWords: string[] = ["hello", "world", "typescript"];
let capitalizedWords: string[] = capitalizeWords(originalWords);
console.log(capitalizedWords); // Output: ["HELLO", "WORLD", "TYPESCRIPT"]  
