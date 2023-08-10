import { useState } from "react";

function ProductOperation() {
let [pid,setPid]=useState(0);
let [pname,setPName]=useState("");
let [price,setPrice]=useState(0.0);
let [url,setUrl]=useState("");
let [products,setProducts]=useState([
    {"pid":1,"pname":"TV","price":45000,"url":"data:image/jpeg;base64,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"}
]);
let [b1,setButton]=useState("Store Product");  // b1 state variable with value store product 

let storeProduct=(event)=> {
   
    event.preventDefault();
    let productObject ={"pid":pid,"pname":pname,"price":price,"url":url};
    console.log(productObject);
    let tempProduct = [...products];        // spread object. copy old product details in tempProduct  
    let result = tempProduct.find(p=>p.pid==pid);// if present it return that object else return undefined 
    console.log(result);
   
   if(b1=="Update Product"){
        //alert("update coding")
    console.log(productObject);
    let index = tempProduct.findIndex(p=>p.pid==pid);   // it give index position if product present else it return -1
    tempProduct.splice(index,1,productObject);    
    // 1st parameter index position and 2nd number of element to delete and 3rd parameter update 
    // new product details with updated information 
    setProducts(tempProduct);
    setButton("Add Product"); 
   }else {
    
    if(result==undefined){
        tempProduct.push(productObject);
    // setProducts(productObject); // we add one product 
    setProducts(tempProduct);        // added new product array object in setProducts
    }else {
        alert("product id must be unique");
    }
  
   }
   
   setPid(0);
   setPName("");
   setPrice(0.0);
   setUrl("");  
   
    
}
let deleteProduct = (event,pid)=>{
    console.log(pid)
    let tempProduct = [...products];        // spread object. copy old product details in tempProduct  
    let index = tempProduct.findIndex(p=>p.pid==pid);   // it give index position if product present else it return -1
    tempProduct.splice(index,1);    // 1st parameter index position and 2nd number of element to delete.  
     setProducts(tempProduct);     
}

let updateProduct=(event,p)=> {
    setButton("Update Product");
    console.log(p);
    setPid(p.pid);
    setPName(p.pname);
    setPrice(p.price);
    setUrl(p.url);
}
let productRow = products.map((p,index)=>
    <tr key={index}>
        <td>{p.pid}</td>
        <td>{p.pname}</td>
        <td>{p.price}</td>
        <td><img src={p.url} width={100} height={100}/></td>
        <td>
            {/* <input type="button" value="Delete Product"
            onClick={(event)=>
            deleteProduct(event,p.pid)}/> */}

<a onClick={(event)=>
            deleteProduct(event,p.pid)}>
                <img src="data:image/jpeg;base64,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" width={50} height={50}/>
            </a>    

        </td>
        <td>
            {/* <input type="button" value="Update Product"
            onClick={(event)=>
            updateProduct(event,p)}/> */}
            <a onClick={(event)=>
            updateProduct(event,p)}>
                <img src="data:image/jpeg;base64,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" width={50} height={50}/>
            </a>
        </td>
    </tr>
)
    return(
        <div className="container">
            <h2 style={{"color":"red",'fontSize':"24pt"}}>Product CRUD Operation</h2>
            <form onSubmit={storeProduct} className="form-group">
                <label>Pid</label>
                <input type="number" value={pid} name="pid"
                onChange={(event)=>setPid(event.target.value)}
                className="form-control"/><br/>
                <label>PName</label>
                <input type="text" value={pname} name="pname"
                onChange={(event)=>setPName(event.target.value)}
                className="form-control"/><br/>
                <label>Price</label>
                <input type="number" value={price} name="price"
                onChange={(event)=>setPrice(event.target.value)}
                className="form-control"/><br/>
                <label>URL</label>
                <input type="text" value={url} name="url"
                onChange={(event)=>setUrl(event.target.value)}
                className="form-control"/><br/>
                <input type="submit" value={b1} className="btn btn-success"/>
                <input type="reset" value="reset" className="btn btn-info"/>
            </form>
            <hr/>
            <table className="table">
                <thead>
                    <th>PId</th>
                    <th>PName</th>
                    <th>Price</th>
                    <th>Image URL</th>
                    <th>Delete Product</th>
                    <th>Update Product</th>
                </thead>
                <tbody>
                    {productRow}
                </tbody>
            </table>
        </div>
    )

}


export default ProductOperation;