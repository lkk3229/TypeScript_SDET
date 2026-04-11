// ========= forEach(), map(), filter(), some(), every() ==========

// 1. forEach() => Executes a function once for each array element
// It takes function as a parameter

// Syntax: array.forEach(callback(currentValue, index, array){});

// currentValue - The current element being processed in the array.
// index (optional) - The index of the current element being processed in the array.
// array (optional) - The array the current element belong to.

// Ex 1: Get index of all the fruits along with value

let fruits1:string[] = ["avocado", "blueberry", "fig", "blackberry", "coconut", "date"];
console.log("Printing fruits with their index using for loop:");

for( let i in fruits1)
{
    console.log(`Index: ${i}, Value: ${fruits1[i]}`);
}

console.log("Printing fruits with their index using forEach loop:");

fruits1.forEach((fruit, index) => {
    console.log(`Index: ${index}, Value: ${fruit}`);
});

// using arrow function
console.log("Printing fruits with their index using forEach loop with arrow function:");    
fruits1.forEach((fruit, index) =>{
     console.log(`Index: ${index}, Value: ${fruit}`)
    });

// Ex 2: 

fruits1.forEach((fruit) =>{
     console.log(fruit.toUpperCase())
    });

// 2. map() => Creates a new array with the results of calling the function on every element of an array
// It takes function as parameter
// Returns the same number of elements that we have in original array

// Syntax: array.map(callback(currentValue, index, array){});

// Ex 1: Get the square of all the numbers in an array

let numbers1:number[] = [1, 2, 3, 4, 5];
let squares:number[] = numbers1.map(function(num){
    return num * num;
});
console.log("Original numbers:", numbers1); // Outputs: [1, 2, 3, 4, 5]
console.log("Squares of numbers:", squares); // Outputs: [1, 4, 9, 16, 25]

// Ex 2: Double each number in the array using arrow function
let doubledNumbers:number[] = numbers1.map((num) =>  // if you have single return statement inside the arrow function then {} and 'return' keyword are optional
                                num * 2
                                );
console.log("Doubled numbers:", doubledNumbers); // Outputs: [2, 4, 6, 8, 10]   

// 3. filter() => Creates a new array with all the elements that pass/satisfy the function
// It takes function as parameter
// Returns either same or fewer number of elements compared to original array.

// Syntax: array.filter(callback(currentValue, index, array){});

// Ex 1: Get all the even numbers from an array

let evenNumbers:number[] = numbers1.filter((num)=> {
    return num % 2 === 0; // returns true for even numbers and false for odd numbers
});
console.log("Even numbers:", evenNumbers); // Outputs: [2, 4]

let evenNumbers1:number[] = numbers1.filter(num => num % 2 === 0); // using arrow function with implicit return
console.log("Even numbers using arrow function:", evenNumbers1); // Outputs: [2, 4]

// Ex 2: Get the only numbers greater than 3 from the array

let greaterThanThree:number[] = numbers1.filter(num => num > 3);
console.log("Numbers greater than 3:", greaterThanThree); // Outputs: [4, 5]    

// 4. reduce() => Applies a function on every element of an array and returns a single value
// It takes function as parameter
// Syntax: array.reduce(callback(accumulator, currentValue, index, array){}, initialValue);

// Ex 1: Get the sum of all the numbers in an array
let total=0;

for(let i=0; i<numbers1.length; i++){
    total += numbers1[i];
}
console.log("Sum of numbers using for loop:", total); // Outputs: 15

// using reduce method
let sum:number = numbers1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 5); // 5 is the initial value of accumulator, if we don't provide it then the first element of the array will be used as initial value and the iteration will start from the second element (default value=0)
console.log("Sum of numbers:", sum); // Outputs: 20

let sum1:number = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue); // using arrow function with implicit return and default initial value
console.log("Sum of numbers using arrow function:", sum1); // Outputs: 15

// 5. some() => Check if any element satisfies a condition
// returns true if at least one element passes the condition, else false

// Syntax: array.some(callback(currentValue, index, array){});

// Ex 1: Check aaray contains negative numbers or not

let numbers2:number[] = [1, -2, 3, 4, -5];
let hasNegativeNumbers:boolean = numbers2.some(num => num < 0);
console.log("Does the array contain negative numbers?", hasNegativeNumbers); // Outputs: true   

// Ex 2: Check aaray contains positive numbers or not
let numbers3:number[] = [-1, -2, -3, -4, -5];
let hasPositiveNumbers:boolean = numbers3.some(num => num > 0);
console.log("Does the array contain positive numbers?", hasPositiveNumbers); // Outputs: false  

// 6. every() => Check if all elements satisfy a condition
// returns true if all elements pass the condition, else false

// Syntax: array.every(callback(currentValue, index, array){});

// Ex 1: Check if all numbers in the array are positive
let numbers4:number[] = [1, 2, -3, 4, 5];
let allPositive:boolean = numbers4.every(num => num > 0);
console.log("Are all numbers positive?", allPositive); // Outputs: false

// Ex 2: Check if all numbers in the array are even
let numbers5:number[] = [2, 4, 6, 8, 10];
let allEven:boolean = numbers5.every(num => num % 2 === 0);
console.log("Are all numbers even?", allEven); // Outputs: true



