// object - object contains properties and behaviour
// object contains variable and methods
// object is collection of key and value pairs.

// Ex:

// employee -- name, designation, salary, department
//              bonus(), getempdetails(), setdetails()

// Different ways to create an object in JS/TS
// 1. using ''object' type - Directly define the valuesof variable (JS/TS)
// 2. Inline Type Object - we also define the datatype of the keys(TS)
// 3. Using type aliases (TS)
// 4. Using the classes (JS ES6/TS)

// 1. Object type - Directly define the values of variable (JS/TS)
// The TypeScript 'object' type represents all values that are not in primitive types (string, number, boolean, bigint, symbol, null, or undefined). It is a general type that can be used to represent any non-primitive value. However, it does not provide any specific properties or methods, and you cannot access any properties on a variable of type 'object' without first asserting its type or using type guards.

let employee1: object = { name1: "Alice", 
                            age1: 30,
                             job1: "Software Engineer",
                              salary1: 50000
                       };

let employee = { name: "Alice", 
                        age: 30,
                        job: "Software Engineer",
                        salary: 50000,
                        getDetails: function() {
                        //console.log(`Name: ${this.name}, Age: ${this.age}, Job: ${this.job}, Salary: ${this.salary}`);
                        return `Name: ${this.name} of Age: ${this.age} working as: ${this.job} get Salary: ${this.salary}`;
                       }
                };

console.log(typeof employee); // Outputs: object

// Accessing properties of the object - approch 1 - using dot notation
console.log("Employee Name:", employee.name, "Employee Age:", employee.age, "Employee Job:", employee.job, "Employee Salary:", employee.salary);
console.log(employee.getDetails()); // Outputs: Name: Alice, Age: 30, Job: Software Engineer, Salary: 50000

// Accessing properties of the object - approch 2 - using bracket notation
console.log("Employee Name:", employee["name"], "Employee Age:", employee["age"], "Employee Job:", employee["job"], "Employee Salary:", employee["salary"]);
console.log(employee["getDetails"]()); // Outputs: Name: Alice, Age: 30, Job: Software Engineer, Salary: 50000

// Modify the value
employee.salary = 60000; // Modifying the salary property of the employee object
console.log("Updated Employee Salary:", employee.salary); // Outputs: Updated Employee Salary: 60000
console.log(employee.getDetails()); // Outputs: Name: Alice, Age: 30, Job: Software Engineer, Salary: 60000 

// 2. Inline Type Object - we also define the datatype of the keys(TS)
// Problem with Inline type object: Need to repeat structure for every object
let employee2: { name: string;
                age: number;
                job: string;
                salary: number;
                getDetails: () => string
               }
                =
             {
                name: "Bob",
                age: 25,
                job: "Data Analyst",
                salary: 40000,
                getDetails: function()
                {
                    return `${this.name} of Age ${this.age} working as ${this.job} get Salary ${this.salary}`;
                }
            };
console.log(employee2.getDetails()); // Outputs: Name: Bob, Age: 25, Job: Data Analyst, Salary: 40000

// 3. Using type aliases (TS) : allows creating a new name for an existing type

type Product = {
    name: string;
    price: number;
    category: string;
    getDetails: () => string;
};

let product1: Product = {
    name: "Laptop",
    price: 1000,
    category: "Electronics",
    getDetails: function() {
        return `Name of Product is ${this.name} with price ${this.price} and Category ${this.category}`;
    }
};

console.log(product1.getDetails()); // Outputs: Name of Product is Laptop with price 1000 and Category Electronics

let product2: Product = {
    name: "Phone",
    price: 500,
    category: "Electronics",
    getDetails: function() {
        return `Name of Product is ${this.name} with price ${this.price} and Category ${this.category}`;
    }
};

console.log(product2.getDetails()); // Outputs: Name of Product is Phone with price 500 and Category Electronics

let product3: Product = {
    name: "Table",
    price: 200, 
    category: "Furniture",
    getDetails: function() {
        return `Name of Product is ${this.name} with price ${this.price} and Category ${this.category}`;
    }
};

console.log(product3.getDetails()); // Outputs: Name of Product is Table with price 200 and Category Furniture

for (let key in product1) {
    console.log(`Key: ${key}, Value: ${product1[key as keyof Product]}`);
    console.log(product2.name); // Outputs: Phone
    console.log(product3.price); // Outputs: 200
}   

// Ex 2: Intersection of types - we can combine multiple types to create a new type that has all the properties of the combined types
type Electronics = {
    name: string;
    price: number;
    warranty: number;
};

type Furniture = {
    name: string;
    price: number;
    material: string;
};

type ProductDetails = Electronics & Furniture &
{
    getDetails: () => string;
}
; // Intersection of Electronics and Furniture types

let product4: ProductDetails = {    
    name: "Smart TV",
    price: 1500,
    warranty: 2,
    material: "Plastic",
    getDetails: function() {    
        return `Name of Product is ${this.name} with price ${this.price}, warranty ${this.warranty} years and made of ${this.material}`;
     }  

};
console.log(`Name of Product is ${product4.name} with price ${product4.price}, warranty ${product4.warranty} years and made of ${product4.material}`); // Outputs: Name of Product is Smart TV with price 1500, warranty 2 years and made of Plastic    
console.log(product4.getDetails()); // Outputs: Name of Product is Smart TV with price 1500, warranty 2 years and made of Plastic


// 4. Using the classes (JS ES6/TS) 

class Person {
    ssn: string;
    FirstName: string;
    LastName: string;

constructor(ssn: string, FirstName: string, LastName: string) {
    this.ssn = ssn;
    this.FirstName = FirstName;
    this.LastName = LastName;
}  

getFullName(): string {
        return `${this.FirstName} ${this.LastName}`;
    }
getDetails(): string {
        return `SSN: ${this.ssn}, Full Name: ${this.getFullName()}`;
    }
}
// object creation
let person1: Person = new Person("123-45-6789", "John", "Doe"); // Creating an instance of the Person class

console.log(person1.getDetails()); // Outputs: SSN: 123-45-6789, Full Name: John Doe
console.log(person1.getFullName()); // Outputs: John Doe

let person2: Person = new Person("987-65-4321", "Jane", "Smith"); // Creating another instance of the Person class

console.log(person2.getDetails()); // Outputs: SSN: 987-65-4321, Full Name: Jane Smith
console.log(person2.getFullName()); // Outputs: Jane Smith  

let person3: Person = new Person("555-55-5555", "Alice", "Johnson"); // Creating another instance of the Person class

console.log(person3.getDetails());      // Outputs: SSN: 555-55-5555, Full Name: Alice Johnson
console.log(person3.getFullName());      // Outputs: Alice Johnson






