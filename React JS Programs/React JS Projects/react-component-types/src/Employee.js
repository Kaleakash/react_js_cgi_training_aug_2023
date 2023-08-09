import { useState } from "react";

function Employee() {
let [id,setId]=useState(0);
let [name,setName]=useState("");
let [salary,setSalary]=useState(0.0);
let [tech,setTechnologies]=useState(["Java","Python","Angular","React JS"]);
// function changeEmpInfo(){
//     setId(1);
//     setName("Ravi");
//     setSalary(120000);
// }
// let changeInfo = function (){  
//         setId(1);
//         setName("Ravi");
//         setSalary(120000);  
// }
let changeInfo = ()=>{
    setId(1);
    setName("Ravi");
    setSalary(12000);
}
let technology = tech.map(t=><li>{t}</li>)
    return(
        <div>
            <h2>Employee Details</h2>
            <p> Id is {id} name is {name} and salary is {salary}</p>
            <p>{tech}</p>
            <ul>
                {technology}
            </ul>
            <input type="button" value="Change Employee details" onClick={changeInfo}/>

        </div>
    )
}
export default Employee;