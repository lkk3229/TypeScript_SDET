//do-while loop : A do-while loop is similar to a while loop,
//                but it guarantees that the loop body will be executed at least once, as the condition is checked after the body is executed.

//Syntax:
/*
do {
    // code to be executed
} while (condition);
*/

// Example 1 : 1 ....5
let i: number = 1; // Initialize i to 1
do {
    console.log(i);
    i++; // Increment i by 1
} while (i <= 5);

//Example 2: 5 ....1
let j: number = 5; // Initialize j to 5
do {
    console.log(j);
    j--; // Decrement j by 1
} while (j > 0);    
