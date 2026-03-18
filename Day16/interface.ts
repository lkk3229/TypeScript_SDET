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

let student: Person = {
    name:"john",
    age:30
}

console.log(student.name); // Output: John
console.log(student.age);  // Output: 30

console.log(student); // Output: { name: 'John', age: 30 }

// Example 2 : Interface with optional properties  (?)

interface Employee
{
    ename:string;
    eage:number;
    edepartment?:string; // Optional property
}

let emp1: Employee = {
    ename:"Alice",
    eage:25
}   

let emp2: Employee = {
    ename:"Bob",
    eage:30,
    edepartment:"HR"
}

console.log(emp1); // Output: { ename: 'Alice', eage: 25 }
console.log(emp1.eage,emp1.ename); //Output: 25 Alice

console.log(emp2); // Output: { ename: 'Bob', eage: 30, edepartment: 'HR' }
console.log(emp2.eage, emp2.ename, emp2.edepartment); //Output: 30 Bob HR

// 3. Readonly properties & function types

interface Car   
{
    readonly make:string; // Readonly property (can only be assigned once)
    model:string;
    year:number;
    getCarInfo: () => string; // Function type
}

let myCar: Car = {
    make:"Toyota",
    model:"Camry",
    year:2020,
    getCarInfo: function()
    {
        return `Car: ${this.make} ${this.model}, Year: ${this.year}`;
    }
}

console.log(myCar.getCarInfo()); // Output: Car: Toyota Camry, Year: 2020

// Try to modify readonly property (this will cause a compile-time error)
// myCar.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property.

// 4. Extending interfaces
// Parent Interface
interface Vehicle
{
    make:string;
    model:string;
    year:number;
}

// Child Interface
interface Truck extends Vehicle
{
    payloadCapacity:number;
    getTruckInfo: () => string;
}

let myTruck: Truck = {
    make:"Ford",
    model:"F-150",
    year:2021,
    payloadCapacity: 3000,
    getTruckInfo: function()
    {
        return `Truck: ${this.make} ${this.model}, Year: ${this.year}, Payload Capacity: ${this.payloadCapacity} lbs`;
    }
}

console.log(myTruck.getTruckInfo()); // Output: Truck: Ford F-150, Year: 2021, Payload Capacity: 3000 lbs


// 5. Class implements interface

//class can extends another class
// interface can extends another interface

// class can implement interface

interface Shape
{
    area: number;
    calculateArea: () => number;
}

class Circle implements Shape
{
    radius: number;
    area: number;
    constructor(radius: number)
    {
        this.radius = radius;   
        this.area = this.calculateArea();
    }
    calculateArea(): number
    {
        return Math.PI * this.radius * this.radius;
    }
}

let myCircle = new Circle(5);
console.log(`Circle with radius ${myCircle.radius} has area: ${myCircle.area.toFixed(2)}`); // Output: Circle with radius 5 has area: 78.54


