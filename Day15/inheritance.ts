//Inheritance
// A class can use the properties and methods of another class using inheritance.
//  The class that inherits is called the child class or subclass, and the class being inherited from is called the parent class or superclass.
//  Inheritance promotes code reusability and establishes a natural hierarchical relationship between classes.

// Method Overriding:
// A subclass cna provide a specific implementation of a method that is already defined in its superclass.
// The method must have the same name, return type, and parameters.


// A ----properties + methods (Parent class/ BaseClass/ Super class)
// B extends A --- properties + methods (Child class/ derived class/ sub class)

//parent class
class car
{
    name:string;
    color:string;
    model:string;

    constructor(name:string, color:string, model:string)
    {
        this.name = name;
        this.color = color;
        this.model = model;
    }

    start()
    {
        console.log("Car started.....")
    }

    stop()
    {
        console.log("Car stopped....")
    }

    displayInformation()
    {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`);
    }
}

// child class - Honda
class Honda extends car
{
    year:number;

    constructor(name:string, color:string, model:string, year:number)
    {
        super(name, color, model);
        this.year= year;
    }

    // Method overriding - we can provide a new implementation for the inherited method in the child class
    start()
    {
        console.log("Honda car started.....")
    }

    yom()
    {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, Year of Manufacture: ${this.year}`);
    }
}

// child class - Maruti
class Maruti extends car
{
    year:number;   
    
    constructor(name:string, color:string, model:string, year:number)
    {
        super(name, color, model);
        this.year= year;
    }

    // Method overriding - we can provide a new implementation for the inherited method in the child class
    start()
    {
        console.log("Maruti car started.....")
    }

    yom()
    {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, Year of Manufacture: ${this.year}`);
    }
}

//Usage

// Create Honda Object
let honda=new Honda("Honda","Red","Honda city",2024);
 
    console.log(honda.name);
    console.log(honda.color);
    console.log(honda.model);
    console.log(honda.year);

    honda.start();
    honda.displayInformation();
    honda.stop();
    honda.yom();

// Create Maruti Object
let maruti=new Maruti("Maruti", "White", "Suzuki",2023);
    console.log(maruti.name);
    console.log(maruti.color);
    console.log(maruti.model);
    console.log(maruti.year);

    maruti.start();
    maruti.displayInformation();
    maruti.stop();
    maruti.yom();

//Parent class variable is holding child class object
let car1:car=new Honda("Honda","Blue", "Honda Amaze", 2012);

car1.displayInformation();
car1.start();  // Child class method will be called

//car1.yom();  // Not accessible, defined in child class but not in parent






