import React from 'react';

class Customer extends React.Component{

    constructor(){
        super();        // it is calling super class constructor ie Componet class. 
        this.state = {msg:"This is customer info"}
    }

    render() {



        return(
            <div>
                <h2>Customer class component</h2>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}


export default Customer;