// Method OverLoading and Constructor OverLoading in TS

class Calculator
{
    // Constructor OverLoading
    constructor();  //default constructor
    constructor(a:number, b:number); //parametrised constructor

    constructor(a?:number, b?:number)
    {
        if (a!==undefined && b!==undefined)
        {
            console.log("Sum of a & b: ",(a+b)); 
        }
        else{
            console.log("Default constructor called.....");
        }
    }

    //method Overloading
    add(a:number, b:number): number; // method signature 1
    add(a:number, b:number, c:number): number; // method signature 2

    add(a:number, b:number, c?:number): number
    {
        if (c !== undefined)
        {
            return a + b + c; // implementation for method signature 2
        }
        else
        {
            return a + b; // implementation for method signature 1
        }
    }
}

// Usage

//Constructor OverLoading
let calc1=new Calculator(); // Output: Default constructor called.....
let calc2=new Calculator(5, 10); // Output: Sum of a & b: 15

//Method OverLoading
console.log("Addition of 2 numbers:", calc1.add(5, 10)); // Output: Addition of 2 numbers: 15
console.log("Addition of 3 numbers:", calc1.add(5, 10, 15)); // Output: Addition of 3 numbers: 30