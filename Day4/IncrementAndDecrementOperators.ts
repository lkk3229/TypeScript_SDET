// Increment ++
// decrement --

let p: number = 5;

console.log("Initial value of p: ", p); // Output: 5  
p++; // Post-increment: p is incremented after its current value is used
console.log("Value of p after post-increment (p++): ", p); // Output: 6  

p = 5; // Reset p to 5
++p; // Pre-increment: p is incremented before its current value is used
console.log("Value of p after pre-increment (++p): ", p); // Output: 6

//post increment
p = 10; // Reset p to 10
let res:number = p++;
console.log("Value of res after post-increment (res = p++): ", res); // Output: 10, because p is incremented after its value is assigned to res
console.log("Value of p after post-increment (p++): ", p); // Output: 11, because p is incremented after its value is assigned to res

//pre increment
p = 20; // Reset p to 20
let res2:number = ++p;
console.log("Value of res2 after pre-increment (res2 = ++p): ", res2); // Output: 21, because p is incremented before its value is assigned to res2
console.log("Value of p after pre-increment (++p): ", p); // Output: 21, because p is incremented before its value is assigned to res2

// Similarly for decrement operator
p = 5; // Reset p to 5
p--; // Post-decrement: p is decremented after its current value is used
console.log("Value of p after post-decrement (p--): ", p); // Output: 4
p = 5; // Reset p to 5
--p; // Pre-decrement: p is decremented before its current value is used
console.log("Value of p after pre-decrement (--p): ", p); // Output: 4

//post decrement
p = 10; // Reset p to 10
let res3:number = p--; 
console.log("Value of res3 after post-decrement (res3 = p--): ", res3); // Output: 10, because p is decremented after its value is assigned to res3
console.log("Value of p after post-decrement (p--): ", p); // Output: 9, because p is decremented after its value is assigned to res3
//pre decrement
p = 20; // Reset p to 20
let res4:number = --p;
console.log("Value of res4 after pre-decrement (res4 = --p): ", res4); // Output: 19, because p is decremented before its value is assigned to res4
console.log("Value of p after pre-decrement (--p): ", p); // Output: 19, because p is decremented before its value is assigned to res4



