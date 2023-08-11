import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
let [parentName,setParentName]=useState("Ajay Kumar");
let [child1NameReceive,setChild1NameRecieve]=useState();        // this variable is ready to receive the value from child1 
let [child2NameReceive,setChild2NameRecieve]=useState();        // this variable is ready to receive the value from child2 
let callbackFun1=(data)=> {
    console.log(data);
    setChild1NameRecieve(data);
}

let callbackFun2=(data)=> {
    console.log(data);
    setChild2NameRecieve(data);
}
    return(
        <div  style={{"backgroundColor":"yellow"}}>
            <h2>Parent Component</h2>
            <p> Parent Name in parent component is {parentName}</p>
            <p> Child1 Name is parent component is {child1NameReceive}</p>
            <p> Child2 Name is parent component is {child2NameReceive}</p>
            <Child1 pname={parentName} age="21" handleCallback={callbackFun1}></Child1>
            <Child2 pname={parentName} city="Bangalore" handleCallback={callbackFun2}></Child2>
            <h2>Parent Component Area</h2>
        </div>
    )
}


export default Parent;