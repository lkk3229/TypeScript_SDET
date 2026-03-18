/*
1. Class
2. Read only Properties
3. Optional Properties
4. Static variable and methods
    1. Static properties/methods are common/shared across all the objects
    2. static properties/methods can be accessed using the class name without creating an instance of the class
    3. Static methods cannot access instance properties/methods directly, they can only access static properties/methods
    4. static properties/methods can be modified usinf any object
    5. we can not use this for accessing static properties/methods inside the class, we need to use class name to access static properties/methods inside the class
*/

class student
{
    readonly studentId:number;  //Read-only property(can only be assigned once, inside constructor)
    name:string;    //Regular Property
    email?:string;  //Optional Property (may or may not be present in the object)
    static schoolName:string="Greeland High School"; //Static variable (belongs to the class rather than any instance)

    //Static method to get school name
    static getSchoolName():string
    {
        return student.schoolName;
    }
    
    //Constructor
    constructor(studentId:number, name:string, email?:string)
    {
        this.studentId = studentId;
        this.name = name;
        if(email)
        {
            this.email = email;
        }
    }

    //Method
    getDetails():void {
        console.log(`Student ID: ${this.studentId}, Name: ${this.name}, Email: ${this.email ? this.email : "N/A"}, School Name: ${student.getSchoolName()}`); // access static method using class name
    }   
}

//Usage
let s1=new student(101,"john");
let s2=new student(102,"Bob","bob@gmail.com");

//display details of students
s1.getDetails(); // Output: Student ID: 101, Name: John, Email: N/A, School Name: Greeland High School
s2.getDetails(); // Output: Student ID: 102, Name: Bob, Email: bob@gmail.com, School Name: Greeland High School

//try to modify read-only property (this will cause a compile-time error)
//s1.studentId = 201; // Error: Cannot assign to 'studentId' because it is a read-only property.

//Access static method using class name
console.log("School Name:", student.getSchoolName()); // Output: School Name: Greeland High School      

// change static property using class name
student.schoolName = "Greenwood High School";
console.log("Updated School Name:", student.getSchoolName()); // Output: Updated School Name: Greenwood High School

//display details of students after updating static property
s1.getDetails();    // Output: Student ID: 101, Name: John, Email: N/A, School Name: Greenwood High School
s2.getDetails();    // Output: Student ID: 102, Name: Bob, Email:

