//super() - used to invoke immediate parent child constructor
// super - used to invoke immediate parent class method

//super - cannot be used to invoke the parent class properties. (In java it is possible)

class Parent{
    num:number=10;

    constructor()
    {
        console.log("This is parent class constructor......")
    }

    display()
    {
        console.log("This is display() method from Parent class....")
    }
}

class Child extends Parent{
    num:number=20;   //overriden

    constructor(){
        super();
        console.log("This is child class constructor")
    }

    show()
    {
        //console.log(super.num);   //parent's num //TS doesnot support super, num to access parent class properties directly like java does.
        console.log(this.num);
        console.log("This is show() method from the child class..... ")
    }

    //overridden method
    display()
    {
        super.display();  //this will invoke parent class method
        console.log("This is display() method from child class....")
        // super.display();  //this will invoke parent class method     => we can keep here also
    }
}

let c1=new Child();
c1.show();   //child class
c1.display()  //child class








