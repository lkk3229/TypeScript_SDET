// Ternary/conditional operator

// ?:

//exp ? true : false

let m:number = 100, n:number=200;

let res5:number = (m > n) ? m : n; // res will hold the greater value between m and n
console.log("Greater value between m and n: ", res5); // Output: 200, because n is greater than m

let personAge:number = 18;

let result:string = (personAge >= 18) ? "Adult" : "Minor"; // result will be "Adult" if personAge is 18 or more, otherwise "Minor"
console.log("Person is: ", result); // Output: "Adult", because personAge is 18 which is greater than or equal to 18
