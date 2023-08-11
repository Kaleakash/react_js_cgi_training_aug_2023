import { useState } from "react";
function Login() {
let [emailid,setEmailId]=useState("");
let [password,setPassword]=useState("");
let [msg,setMsg]=useState("");
let changeValue= (event)=> {
    console.log("event generated");
    //console.log(event);
    let name = event.target.name;
    let value = event.target.value;
    console.log(name+" "+value);
    if(name=="emailid"){
        setEmailId(value);
    }else {
        setPassword(value);
    }   
}
let handleSubmit=(event)=> {
     event.preventDefault();
    console.log("submit even fired")
    // we call backend API and pass login details 
    if(emailid=="akash@gmail.com" && password=="123"){
            //alert("successfully login")
            setMsg("successfully login")
    }else {
            //alert("failure try once again")
            setMsg("failure");
    }
    resetInfo();
}
let resetInfo = (event)=> {
    setEmailId("");
    setPassword("");
}
    return(
        <div>
            <span style={{"color":"red"}}>{msg}</span>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <label>Emailid</label>
                    <input type="email" value={emailid} name="emailid" onChange={changeValue}/>
                    
                    <br/>
                <label>Password</label>
                    <input type="password" value={password} name="password" onChange={changeValue}/><br/>
                <input type="submit" value="submit"/>
                {/* <input type="button" value="submit" onClick=""/> */}
                <input type="reset" value="reset"/>
            </form>
            <hr/>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <label>Emailid</label>
                <input type="email" value={emailid} name="emailid" onChange={(event)=>setEmailId(event.target.value)}/><br/>
                <label>Password</label>
                <input type="password" value={password} name="password" onChange={(event)=>setPassword(event.target.value)}/><br/>
                <input type="submit" value="submit"/>
                {/* <input type="button" value="submit" onClick=""/> */}
                <input type="reset" value="reset"/>
            </form>
        </div>
    )

}

export default Login;