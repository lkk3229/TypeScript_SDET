// for loop : A for loop is a control flow statement that allows you to repeat a block of code a certain number of times.
//            It consists of three parts: initialization, condition, and increment/decrement.

//Syntax:
/*
for (initialization; condition; increment/decrement) {
    // code to be executed
}
*/

// Example 1 : print numbers from 0 to 4
for (let i: number = 0; i < 5; i++) { // initialization: let i = 0, condition: i < 5, increment: i++
    console.log(i);
}   

// Example 2 : print even numbers from 1 to 10
for (let num: number = 1; num <= 10; num++) { // initialization: let num = 1, condition: num <= 10, increment: num++
    if (num % 2 === 0) { // Check if num is even
        console.log(num);
    }
}

// Example 3 : print 10 9 8 7 6 5 4 3 2 1
for (let n: number = 10; n > 0; n--) { // initialization: let n = 10, condition: n > 0, decrement: n--
    console.log(n);
}   

// Example 4:
let s:number;
for (s = 1; s <= 5; s++) { // initialization: let s = 1, condition: s <= 5, increment: s++
    console.log(s);
}
console.log("Value of s after the loop: " + s); // Output: Value of s after the loop: 6


let t: number;
for (t = 1; t <= 5; t++); 
console.log("the value of t is :",t); 