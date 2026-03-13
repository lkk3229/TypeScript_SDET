/*
Tuples in TypeScript
=====================
- A tuple is a fixed-length array where each element has a specific type.
- It helps in storing multiple fields of different types together.
*/

//Example 1: tuple with 2 values

let person: [string, number] = ["Alice", 30]; // Declaring a tuple with a string and a number
console.log(person); // Output: ["Alice", 30]
console.log(person[0]); // Output: Alice (Accessing the first element of the tuple)
console.log(person[1]); // Output: 30 (Accessing the second element of the tuple)

// Example 2: tuple with multiple values
let employee: [string, number, boolean] = ["Bob", 25, true]; // Declaring a tuple with a string, number, and boolean
console.log(employee); // Output: ["Bob", 25, true]
console.log(employee[0]); // Output: Bob (Accessing the first element of the tuple)
console.log(employee[1]); // Output: 25 (Accessing the second element of the tuple)
console.log(employee[2]); // Output: true (Accessing the third element of the tuple)

// Example 3 : Iterating over a tuple using a for loop
console.log("Iterating over employee tuple.............");
for (let i = 0; i < employee.length; i++) {
    console.log(employee[i]);
}

// Example 4 : Iterating over a tuple using a 'for...in' loop (index-based iteration)
console.log("Iterating over employee tuple using 'for...in' loop.............");
for (let index in employee) {
    console.log(employee[index]);
}

// Example 5 : Iterating over a tuple using a 'for...of' loop (value-based iteration)
console.log("Iterating over employee tuple using 'for...of' loop.............");
for (let value of employee) {
    console.log(value);
}

// Example 6 : Tuple Array - An array of tuples
let employees: [string, number][] = [
                                        ["Alice", 30],
                                        ["Bob", 25],
                                        ["Charlie", 35]
                                    ]; // Declaring an array of tuples where each tuple contains a string and a number  
console.log(employees); // Output: [["Alice", 30], ["Bob", 25], ["Charlie", 35]]
console.log(employees.length); // Output: 3 (Number of tuples in the array)
console.log(employees[0]); // Output: ["Alice", 30] (Accessing the first tuple in the array)
console.log(employees[0][0]); // Output: Alice (Accessing the first element of the first tuple)
//or
let tp=employees[0];
console.log(tp[0]); // Output: Alice (Accessing the first element of the first tuple using a variable)
console.log(tp[1]); // Output: 30 (Accessing the second element of the first tuple using a variable)