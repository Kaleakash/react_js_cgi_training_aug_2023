
// var obj = new Promise((resolve,reject)=> {
//     resolve("done"),
//     reject("error generated")
// })


//     obj.then(data=>console.log("Then called.."+data)).catch(error=>console.log("catch "+error));
// console.log("normal statement 1");
// console.log("normal statement 2");
// console.log("normal statement 3");
// console.log("normal statement 4");
// console.log("normal statement 5");
// console.log("normal statement 6");


fetch("https://dummyjson.com/products").
then(response=>response.json()).
then(result=>console.log(result.products)).catch(error=>console.log(error));