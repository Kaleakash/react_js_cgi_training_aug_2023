import { useState } from "react";

function Employee() {
let [id,setId]=useState(0);     // primitive value 
let [name,setName]=useState("");
let [salary,setSalary]=useState(0.0);
let [tech,setTechnologies]=useState(["Java","Python","Angular","React JS"]);    // array value with string value
let [emp,setEmp]=useState({id:2,name:"Mahesh",salary:34000});       // object reference variable. 
let changeInfo = ()=>{
    setId(1);       // asyn 
    setName("Ravi");
    setSalary(12000);
    // we need to convert separte property to object literate using syntax 
    let empInfo = {"id":id,"name":name,"salary":salary};
    console.log(empInfo);  
    console.log(emp); 
}
let technology = tech.map((v,index)=><li key={index}>{v}</li>)
    return(
        <div>
            <h2>Employee Details</h2>
            <p> Id is {id} name is {name} and salary is {salary}</p>
            <p>{tech}</p>
            <ul>
                {technology}
            </ul>
            <h3>Employee information is </h3>
            <p>Id is {emp.id} name is {emp.name} salary is {emp.salary}</p>
            <input type="button" value="Change Employee details" onClick={changeInfo}/>
        </div>
    )
}
export default Employee;