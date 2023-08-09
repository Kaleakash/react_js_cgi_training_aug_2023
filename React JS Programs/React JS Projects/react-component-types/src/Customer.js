import React from 'react';

class Customer extends React.Component{

    constructor(){
        super();        // it is calling super class constructor ie Componet class. 
        this.state = {msg:"This is customer info"}
       this.changeMsg= this.changeMsg.bind(this);      // we need to provide 
    }                       // all function details in customer 

    changeMsg() {
        alert("hello")
       this.setState({msg:"We change customer information"});
    }
    render() {

        return(
            <div>
                <h2>Customer class component</h2>
                <p>{this.state.msg}</p>
<input type="button" value="click here" onClick={this.changeMsg}/>
<input type="button" value="click here" onClick={()=>this.setState({msg:"we change customer info inline fun"})}/>

            </div>
        )
    }
}


export default Customer;

