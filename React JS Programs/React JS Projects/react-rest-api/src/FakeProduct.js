import { useState } from "react";
function FakeProduct() {
let [myproducts,setMyProducts]=useState([]);
let loadFakeData=(event)=> {
    fetch("https://dummyjson.com/products").
    then(response=>response.json()).then(result=>setMyProducts(result.products)).
    catch(error=>console.log(error))
}
let result = myproducts.map((p,index)=> 
    <span key={index}>
        <img src={p.thumbnail} width={50} height={50}/>
        <span>{p.title}</span>
    </span>
    )
return(
    <div>
        <h2>Product Details</h2>
        <input type="button" value="Load Fake Data"
        onClick={loadFakeData}/>
        <br/>
        {result}
    </div>
)
}
export default FakeProduct;