// // normal function : no passing parameter and no return type. 
// info();
// function info() {
//     document.write("<br/> Normal function syntax");
// }
// info();
// // normal function : passing value and no return type 
// function add(a,b){
//     var sum = a+b;
//     document.write("<br/> Sum of two number is "+sum);
// }
// add(10,20);
// // normal function : passing value and return type 
// function sayHello(name){
//     return "Welcome to user defined function "+name;
// }
// var result = sayHello("Ravi");
// document.write("<br/>"+result);
// // expression style function 
// let display1 = function display() {
//                     document.write("<br/> This is expression style function");
//                 }
// display1();
// // expression style function 
// //display2();
// var display2 = function() {
//     document.write("This is expression style function ")
// }
// display2();

// //arrow style 
// let display3 = ()=>document.write("<br/>This is arrow function");
// display3(); 

// // passing parameter with expression style 
// let addNumber1= function(a,b){
//     var sum = a+b;
//     return sum;
// }
// document.write("<br/> Sum of two number is expression style "+addNumber1(10,20));
// // passing parameter with arrow style 
// // in arrow we can return the value without return keyword. 
// let addNumber2 = (a,b)=>a+b;
// //let addNumber2=(x,y)=>x-y
// document.write("<br/> sum of two number in arrow style is "+addNumber2(10,20));
// let findLargest1 = function(a,b){
//     if(a>b){
//         return "a is largest"
//     }else {
//         return "b is largest"
//     }
// }
// document.write("<br> Expression style find largest "+findLargest1(10,20));
// var findLargest2 = (a,b)=>{
//     if(a>b){
//         return "a is largest"
//     }else {
//         return "b is largest"
//     }
// }
// document.write("<br> Expression style find largest "+findLargest2(10,20));


function greeting(fname,callback){
    return "Welcome "+callback(fname);
}

let maleInfo = (fname)=>"Mr "+fname;

let femaleInfo = function(fname){
    return "Miss "+fname;
}

document.write("<br/> "+greeting("Ravi",maleInfo));
document.write("<br/> "+greeting("Reeta",femaleInfo))
document.write("<br/> "+greeting("Ramesh",(fname)=>"Mr "+fname));       // arrow style 
document.write("<br/> "+greeting("Seeta",function(fname){               // exprssion style 
    return "Miss "+fname;
}));










