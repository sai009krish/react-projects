import React, { Component } from 'react'


export default class State extends Component {
    constructor(props){
        super(props)
        this.state={
            counter:0,
            bgcolor:'lightblue'
        }
    }


    
    divStyle={
        backgroundColor:'lightblue',
        border:'2px solid black',
        padding:'10px',
        textAlign:'center'
    }

   
handleCounter=()=>{
    this.setState({bgcolor:'red'})
    
}

    render() {
        console.log('state changed');
        return (
            <div style={{backgroundColor:this.state.bgcolor}}>
                <h1>{this.state.counter}</h1>
               <button onClick={this.handleCounter}>Increment</button> 
            </div>
        )
    }
}
