// Interface
/*
 1. An interface in TS is a way to define the structure of an object.
 2. It tells the compiler what properties and types an object should have.
 3. It's like a blueprint for objects.

 Abstract method : we only have signature of method (There is no implementation)

 Syntax:

 interface Interfacename
 {
 properties
 abstract methods
 }

 1. Regular properties
 2. Optional Properties
 3. Readonly properties & function types
 4. Extending interfaces
 5. class implements interface

*/

// Example 1 : Basic interface

interface Person
{
    name:string;
    age:number;
}

let student5:Person{
    name:"john",
    age:30
}
