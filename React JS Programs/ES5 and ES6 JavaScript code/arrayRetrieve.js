let num1 = [10,11,14,20,30,33,40,50,65,60];
document.write("<br/> "+num1);
document.write("<br/> retreive eleemnt using for loop ");
for(let i=0;i<num1.length;i++){
    document.write("<br/> "+num1[i]);
}
document.write("<br/> for in loop")
for(let i in num1){                     // it will give index 
    document.write("<br/>index "+i+" Value "+num1[i])
}
document.write("<br/> for of loop")
for(let n of num1){                     // it give value 
    document.write("<br/> Value is "+n)
}
document.write("<br/> using for each function");
num1.forEach(display);

function display(n){
    document.write("<br/> "+n)
}
document.write("<br/> for each using expression style")
num1.forEach(function(n,i){
    document.write("<br/> value is "+n+" index "+i);
})
document.write("<br/> for each using arrow style")
num1.forEach((n,i)=>document.write("<br/> Value is "+n+"index "+i));

// chain of function 
// 10,20,30,40,50,60
let num2 = num1.map(v=>v+2);
document.write(num2);
num1.map(v=>v+2).forEach(v=>document.write("<br/> Map value "+v));
// [10,11,14,20,30,33,40,50,65,60]

num1.filter(e=>e%2==0).forEach(v=>document.write("<br> Even number "+v));

num1.forEach((n,i)=>document.write("<br/> Value is "+n+"index "+i));







