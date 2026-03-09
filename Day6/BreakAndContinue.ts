// break : The break statement is used to exit a loop or switch statement prematurely.
//         It terminates the loop or switch statement and transfers control to the statement immediately following the loop or switch.

for (let i: number = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i);
}
console.log("Loop terminated.");    

// continue : The continue statement is used to skip the current iteration of a loop and move to the next iteration.
for (let i: number = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip the current iteration if i is even
    }
    console.log(i); // This will only print odd numbers
}       