// Parent class

class Person1
{
    public name:string; //public property - accessible anywhere
    protected age:number; //protected property - accessible within the class and its subclass
    private ssn:number;  //private property - accessible within the class

    constructor(name:string, age:number, ssn:number)
    {
        this.name=name;
        this.age=age;
        this.ssn=ssn;
    }

    displayinfo()
    {
        console.log("Name: ", this.name);
        console.log("Age: ", this.age);
        console.log("SSN: ", this.ssn);
    }
}

class Employee extends Person1
{
    private employeeId:number;

    constructor(name:string, age:number, ssn:number, employeeId:number)
    {
        super(name,age,ssn);
        this.employeeId=employeeId;
    }

    showEmployeeDetails()
    {
        console.log(this.name);   // public - accessible
        console.log(this.age);   // protected - accessible
        //console.log(this.ssn);   // Error private property
        console.log(this.employeeId); //private , still we can access since it is declared inside the same class
    }
}

let emp=new Employee("John",30,24442-343-4343,139);
emp.displayinfo();
emp.showEmployeeDetails();

console.log(emp.name);  //accessible
//console.log(emp.age);  // not accessible
//console.log(emp.ssn);  // not accessible