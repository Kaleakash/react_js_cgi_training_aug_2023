// literal style object creation 
let emp1 = {id:100,name:"Ravi",age:21};
document.write("<br/> Object creation in literal style")
document.write("<br> id is "+emp1.id);
document.write("<br> name is "+emp1.name);
document.write("<br> age is "+emp1.age);

// function style object creation 
// function Employee() {
//     let n=10;       // local scope 
//     var m=20;       // local scope function scope 
//     o=30;           // global scope 
//     this.id = 101;          // instance variable or property 
//     this.name = "Ramesh";
//     this.age = 24;

//     this.display = function() { // object function or behaviour 
//         document.write("<br/>id is "+this.id+" name is "+this.name+" age is "+this.age);
//     }
// }
// //Employee();
// document.write("<br/> object creation in function style<br/>")
// var employee = new Employee();

// //document.write(employee.id)
// employee.display();

// function Employee() {
//     this.id =100;       // property 
//     this.name = "Ravi";
//     this.display = function() {     // behaviour 
//         document.write("<br> id is "+this.id+" name is "+this.name);
//     }
// }

// let employee1 = new Employee();
// let employee2 = new Employee();
// employee1.display();
// employee2.display();


// function style object creation with parameter 
// function Employee(id,name) {
//     this.id =id;       // property 
//     this.name = name;
//     this.display = function() {     // behaviour 
//         document.write("<br> id is "+this.id+" name is "+this.name);
//     }
// }

// let employee1 = new Employee(101,"Ramesh");
// let employee2 = new Employee(102,"Lokesh");
// employee1.display();
// employee2.display();

// class style object creation ES6 

class Employee {
    id=100;             // property withiout this keyword 
    name="Ravi";
    display() {         // behaviour without this keyword but while accessing property in function this.property name
        document.write("<br> id is "+this.id+" name is "+this.name);
    }
}

let employee1 = new Employee();
document.write("<br/> outside id is "+employee1.id+" name is "+employee1.name);
employee1.display();



