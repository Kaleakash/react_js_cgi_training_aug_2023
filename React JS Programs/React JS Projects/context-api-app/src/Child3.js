import { useContext } from "react";
import { MyContext } from "./Context";

function Child3() {

let parentname = useContext(MyContext);
    return(
        <div>
            <h1>Child3 component</h1>
            <p>Parent name in child3 component is {parentname}</p>
        </div>
    )
    
    }
    
    export default Child3;