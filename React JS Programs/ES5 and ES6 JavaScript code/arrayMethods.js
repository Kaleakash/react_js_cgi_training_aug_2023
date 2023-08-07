let num1 =[];               //literal style 
let num2 = new Array();     // using new keyword 
document.write("<br/> length "+num1.length);
document.write("<br/> length "+num2.length);
num1.push(10);  // added at the end 
num1.push(20);
num1.push(30);
num1.push(40);
num1.unshift(100);      // added at the begining 
num1.unshift(200);
document.write("<br/> all elements "+num1);// it display in string format. 
num1.pop();     // remove elements from last 
num1.shift();      // remvoe elements from the begining 
document.write("<br/> all elements "+num1);
//100,10,20,30
// 1st parameter index position, 
//2nd number of elements to delete, 
//3rd,4th,5th parameter number of elements to adde one by one 
//num1.splice(2);       //remove all elements from 2nd index position 
//num1.splice(1,1);       // remove 1st index position element 
//num1.splice(1,2);       // remove 1st and 2nd index position element 
//num1.splice(2,0,1111);  // 2nd index don't remove any element add 1111 value 
//num1.splice(2,1,1111);      // 2nd index position number replace by 1111 value 
num1.splice(2,0,1111,2222,3333,4444);      // from 2nd index position add 1111,2222,3333 and 4444
document.write("<br/> all elements "+num1);