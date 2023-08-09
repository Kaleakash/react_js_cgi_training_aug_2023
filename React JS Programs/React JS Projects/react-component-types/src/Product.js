import { useState } from "react";

 function Product() {
 //let msg =useState("This is product info"); // state variable in functional component 
 let [msg,setMsg]=useState("This is product info");

 let n=10;  // local variable   
 
 function changeData() {
    setMsg("This is product information change");
 }
    return(
        <div>
            <h2>Product function component</h2>
            <p>{msg} and {n}</p>

<input type="button" value="chage info" onClick={changeData}/>
<input type="button" value="chage info" onClick={()=>setMsg("This is product info change in inline")}/>
        </div>
    )
 }

 export default Product;