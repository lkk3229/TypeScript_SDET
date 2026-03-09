// while loop : A while loop executes as long as the conditon is true. It checks the condition before executing the loop body.

//Syntax:
/*
while (condition) {
    // code to be executed
}
*/

// Example of a while loop that prints numbers from 0 to 4
let count: number = 0;   // Initialize count to 0
while (count < 5) {      //condition: loop will continue as long as count is less than 5
    console.log(count);
    count++;             // Increment count by 1
}

//Example 2 : print even numbers from 1 to 10
let num: number = 1;
while (num <= 10) {     //condition: loop will continue as long as num is less than or equal to 10
    if (num % 2 === 0) { // Check if num is even
        console.log(num);
    }
    num++; // Increment num by 1
}  

//Example 3 : print 10 9 8 7 6 5 4 3 2 1
let n: number = 10; 
while (n > 0) {       //condition: loop will continue as long as n is greater than 0
    console.log(n);
    n--;             // Decrement n by 1
}   
    


