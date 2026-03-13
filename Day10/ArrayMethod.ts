
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "cherry"];

console.log("Numbers:", numbers);   // Outputs: [1, 2, 3, 4, 5]
console.log("Fruits:", fruits);     // Outputs: ["apple", "banana", "cherry"]

// length - attribute
console.log("Length of numbers array:", numbers.length);   // Outputs: 5
console.log("Length of fruits array:", fruits.length);    // Outputs: 3

// Array methods 

//1. push - adds single/multiple elements to the end of the array
// Syntax: array.push(element1, element2, ..., elementN)
numbers.push(6); // Adds 6 to the end of the array
fruits.push("date", "elderberry"); // Adds "date" and "elderberry" to the end of the array

console.log("Numbers after push:", numbers);  // Outputs: [1, 2, 3, 4, 5, 6]
console.log("Fruits after push:", fruits);   // Outputs: ["apple", "banana", "cherry", "date", "elderberry"]


//2. pop - removes the last element from the array and returns it
// Syntax: array.pop()
let lastNumber = numbers.pop(); // Removes the last element (6) and returns it
let lastFruit = fruits.pop(); // Removes the last element ("elderberry") and returns it

console.log("Last number removed:", lastNumber);  // Outputs: 6
console.log("Last fruit removed:", lastFruit);  // Outputs: "elderberry"

console.log("Numbers after pop:", numbers);   // Outputs: [1, 2, 3, 4, 5]
console.log("Fruits after pop:", fruits);   // Outputs: ["apple", "banana", "cherry", "date"]

//3. shift - removes the first element from the array and returns it
// Syntax: array.shift()
let firstNumber = numbers.shift(); // Removes the first element (1) and returns it
let firstFruit = fruits.shift(); // Removes the first element ("apple") and returns it

console.log("First number removed:", firstNumber);  // Outputs: 1
console.log("First fruit removed:", firstFruit);  // Outputs: "apple"
console.log("Numbers after shift:", numbers);   // Outputs: [2, 3, 4, 5]
console.log("Fruits after shift:", fruits);   // Outputs: ["banana", "cherry", "date"]

//4. unshift - adds single/multiple elements to the beginning of the array
// Syntax: array.unshift(element1, element2, ..., elementN)
numbers.unshift(0); // Adds 0 to the beginning of the array
fruits.unshift("avocado", "blueberry"); // Adds "avocado" and "blueberry" to the beginning of the array

console.log("Numbers after unshift:", numbers);   // Outputs: [0, 2, 3, 4, 5]
console.log("Fruits after unshift:", fruits);   // Outputs: ["avocado", "blueberry", "banana", "cherry", "date"]

//5. concat - merges two or more arrays of same type and returns a new array
// Syntax: array1.concat(array2, array3, ..., arrayN)
let moreNumbers: number[] = [6, 7, 8];
let allNumbers = numbers.concat(moreNumbers); // Merges numbers and moreNumbers into a new array    
let moreFruits: string[] = ["fig", "grape"];
let allFruits = fruits.concat(moreFruits); // Merges fruits and moreFruits into a new array

console.log("All numbers:", allNumbers);  // Outputs: [0, 2, 3, 4, 5, 6, 7, 8]
console.log("All fruits:", allFruits);  // Outputs: ["avocado", "blueberry", "banana", "cherry", "date", "fig", "grape"]

//6. slice - returns a shallow copy of a portion of an array into a new array
// Syntax: array.slice(start, end)
let slicedNumbers = numbers.slice(1, 4); // Returns a new array containing elements from index 1 to 3
let slicedFruits = fruits.slice(0, 2); // Returns a new array containing elements from index 0 to 1 
console.log("Sliced numbers:", slicedNumbers);  // Outputs: [2, 3, 4]
console.log("Sliced fruits:", slicedFruits);  // Outputs: ["avocado", "blueberry"]

//7. splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// Syntax: array.splice(start, deleteCount, item1, item2, ..., itemN)

// Remove and add elements using splice
numbers.splice(2, 1, 99); // Removes 1 element at index 2 and adds 99 in its place
fruits.splice(1, 2, "blackberry", "coconut"); // Removes 2 elements starting from index 1 and adds "blackberry" and "coconut" in their place
console.log("Numbers after splice:", numbers);  // Outputs: [0, 2, 99, 4, 5]
console.log("Fruits after splice:", fruits);  // Outputs: ["avocado", "blackberry", "coconut", "date"]

// Using splice to remove elements without adding new ones
numbers.splice(3, 0); // Removes 0 elements at index 3 (no change to the array)
fruits.splice(2, 0); // Removes 0 elements at index 2 (no change to the array)
console.log("Numbers after splice with no deletion:", numbers);  // Outputs: [0, 2, 99, 4, 5]
console.log("Fruits after splice with no deletion:", fruits);  // Outputs: ["avocado", "blackberry", "coconut", "date"]     

// Using splice to add elements without removing any
numbers.splice(1, 0, 34, 45); // Adds 34 and 45 at index 1 without removing any elements
fruits.splice(1, 0, "blueberry", "fig"); // Adds "blueberry" and "fig" at index 1 without removing any elements
console.log("Numbers after splice with addition:", numbers);  // Outputs: [0, 34, 45, 2, 99, 4, 5]  
console.log("Fruits after splice with addition:", fruits);  // Outputs: ["avocado", "blueberry", "fig", "blackberry", "coconut", "date"]

// 8. indexOf - returns the first index at which a given element can be found in the array, or -1 if it is not present
// Syntax: array.indexOf(searchElement, fromIndex)

// Finding the index of existing elements
let indexOf99 = numbers.indexOf(99); // Returns the index of the first occurrence of 99
let indexOfDate = fruits.indexOf("date"); // Returns the index of the first occurrence of "date"
console.log("Index of 99 in numbers:", indexOf99);  // Outputs: 4
console.log("Index of 'date' in fruits:", indexOfDate);  // Outputs: 5

let indexOfNonExistentNumber = numbers.indexOf(100); // Returns -1 since 100 is not in the array
let indexOfNonExistentFruit = fruits.indexOf("kiwi"); // Returns -1 since "kiwi" is not in the array    

// Finding the index of non-existing elements
console.log("Index of 100 in numbers:", indexOfNonExistentNumber);  // Outputs: -1
console.log("Index of 'kiwi' in fruits:", indexOfNonExistentFruit);  // Outputs: -1

// Using indexOf with a fromIndex
indexOf99 = numbers.indexOf(99, 5); // Returns -1 since 99 is not found after index 5
indexOfDate = fruits.indexOf("date", 6); // Returns -1 since "date" is not found after index 6
console.log("Index of 99 in numbers starting from index 5:", indexOf99);  // Outputs: -1
console.log("Index of 'date' in fruits starting from index 6:", indexOfDate);  // Outputs: -1

// 9. includes - determines whether an array includes a certain value among its entries, returning true or false as appropriate
// Syntax: array.includes(searchElement, fromIndex) 

let includes99 = numbers.includes(99); // Returns true since 99 is in the array
let includesDate = fruits.includes("date"); // Returns true since "date" is in the array
console.log("Does numbers include 99?", includes99);  // Outputs: true      
console.log("Does fruits include 'date'?", includesDate);  // Outputs: true

let includes100 = numbers.includes(100); // Returns false since 100 is not in the array
let includesKiwi = fruits.includes("kiwi"); // Returns false since "kiwi" is not in the array
console.log("Does numbers include 100?", includes100);  // Outputs: false
console.log("Does fruits include 'kiwi'?", includesKiwi);  // Outputs: false    

// Using includes with a fromIndex
includes99 = numbers.includes(99, 5); // Returns false since 99 is not found after index 5  
includesDate = fruits.includes("date", 6); // Returns false since "date" is not found after index 6
console.log("Does numbers include 99 starting from index 5?", includes99);  // Outputs: false
console.log("Does fruits include 'date' starting from index 6?", includesDate);  // Outputs: false

// 10. toString - returns a string representing the specified array and its elements
// Syntax: array.toString()

let numbersString = numbers.toString(); // Converts the numbers array to a string
let fruitsString = fruits.toString();
console.log("Numbers as a string:", numbersString);  // Outputs: "0,34,45,2,99,4,5"
console.log("Fruits as a string:", fruitsString);  // Outputs: "avocado,blueberry,fig,blackberry,coconut,date"

let myarray:string[] = ["a", "b", "c"];
console.log("My array:", myarray);  // Outputs: ["a", "b", "c"]
console.log("My array as a string:", myarray.toString());  // Outputs: "a,b,c"







