import { useState } from "react";
import Child1 from "./Child1";
import { MyContext } from "./Context";

function Parent() {
let [name,setName]=useState("Ravi Kumar")

return(
    <MyContext.Provider value={name}>
    <div>
        <h1>Parent component</h1>
        <p>Parent name in parent component is {name}</p>
        <Child1></Child1>
    </div>
    </MyContext.Provider>
)

}

export default Parent;