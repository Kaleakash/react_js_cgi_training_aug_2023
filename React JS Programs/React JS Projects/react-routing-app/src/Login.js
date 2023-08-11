import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
let [emailid,setEmailiId]=useState("");
let [password,setPassword]=useState("");
let navigate = useNavigate();
let checkLogin=(event)=> {
    event.preventDefault();
    //we pass login details to backened technologies using axios with post method. 
    // axios.post("url",login);
    if(emailid=="akash@gmail.com" && password=="123"){
        sessionStorage.setItem("user","akash@gmail.com");       // stored emailid id of user in session storage 
        navigate("/home");      // navitage it use to route with condition or programmatically 
    }else {
            alert("emailid or password is wrong");
    }   
}
return(
    <div>
        <h2>Login Page</h2>
        <form onSubmit={checkLogin}>
            <label>EmaiId</label>
            <input type="email" name="emailid" onChange={(event)=>setEmailiId(event.target.value)}/><br/>
            <label>Password</label>
            <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)}/><br/>
            <input type="submit" value="SignIn"/>
            <input type="reset" value="reset"/>
        </form>
    </div>
)

}
export default Login;