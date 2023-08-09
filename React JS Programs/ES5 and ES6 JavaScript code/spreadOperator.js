let num1=[10,20,30,40];
document.write("<br/> "+num1);
let num2 = [50,60];
document.write("<br/> "+num2);
let num3 = [70,80];
document.write("<br/> "+num3);
num1 = num2;        // assigned all num2 value to num1 and num1 and num2 refer to same memory 
document.write("<br/> "+num1);  // 50,60
document.write("<br/> "+num2);   //50,60
    num1.push(100);
document.write("<br/> "+num1);  // 50,60,100
document.write("<br/> "+num2);   //50,60,100
    num2.push(200);
document.write("<br/> "+num1);  // 50,60,100,200
document.write("<br/> "+num2);   //50,60,100,200
document.write("<br/> ----------------<br/>")
num1 = [...num3];           // all num3 value copied in num1
document.write("<br/>"+num1);   // 70,80
document.write("<br/>"+num3)    //70,80
num1.push(1111);
document.write("<br/>"+num1);
document.write("<br/>"+num3)
num3.push(2222);
document.write("<br/>"+num1);
document.write("<br/>"+num3)