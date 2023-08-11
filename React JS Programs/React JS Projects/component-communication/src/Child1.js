import { useState } from "react";

function Child1(props) {
let [child1,setChild1]=useState("Golu");

    return(
        <div style={{"backgroundColor":"orange"}}>
            <h2>Chid1 Component</h2>
            <p>Parent name in child1 component is {props.pname} and age is {props.age}</p>
            <p>Child1 name in Child1 component is {child1}</p>
            {props.handleCallback(child1)}
        </div>
    )
}


export default Child1;