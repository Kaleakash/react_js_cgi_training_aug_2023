import axios from 'axios';
import { useEffect, useState } from 'react';
function Products() {
let [id,setId]=useState(0);
let [pname,setPname]=useState("");
let [price,setPrice]=useState(0.0);
let [products,setProducts]=useState([]);
useEffect(()=> {        // first time called..
    loadProducts();


    ()=>{
        
        console.log("clean resouce")

        };

},[pname]);
let loadProducts=(event)=> {
    axios.get("http://localhost:3000/products").
    then(result=>setProducts(result.data)).catch(error=>console.log(error));


}
let storeProduct = (event)=> {
    event.preventDefault();
    let product = {"id":id,"pname":pname,"price":price};
    axios.post("http://localhost:3000/products",product).
    then(result=>console.log(result.data)).catch(error=>console.log(error))
    setId(0);
   setPname("");
    setPrice(0.0);
}
let productRecord = products.map(p=><li key={p.id}>PId {p.id} Name {p.pname} Price {p.price}</li>)
return (
    <div>
        <h2>Product Details</h2>
        {/* <input type="button" value="Load Product" 
        onClick={loadProducts}/> */}
        <form onSubmit={storeProduct}>
            <label>PId</label>
            <input type='number' name='id' value={id} onChange={(event)=>setId(event.target.value)}/><br/>
            <label>PName</label>
            <input type='text' name='pname' value={pname} onChange={(event)=>setPname(event.target.value)}/><br/>
            <label>Price</label>
            <input type='number' name='price' value={price} onChange={(event)=>setPrice(event.target.value)}/><br/>
            <input type='submit' value="store product"/>
            <input type='reset' value="reset"/>
        </form>
        <br/>
        <ul>
            {productRecord}
        </ul>
    </div>
)

}

export default Products;