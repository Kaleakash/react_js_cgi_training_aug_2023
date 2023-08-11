import { useState } from "react";

function Child2({pname,city,handleCallback}) {  // de-structure 
    let [child2,setChild2]=useState("Pihuu");


    return(
        <div style={{"backgroundColor":"gray"}}>
            <h2>Chid2 Component</h2>
            <p>In Child2 component parent name is {pname} city is {city}</p>
            <p>In Child2 component child2 name is {child2}</p>
            {handleCallback(child2)}
        </div>
    )
}


export default Child2;