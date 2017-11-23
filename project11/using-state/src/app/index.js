import React from "react";
import { render } from "react-dom";

class StateDemo extends React.Component
{
    constructor(props){
        super(props);
        this.state={counter:0};
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        let current= this.state.counter;
        console.log(current);
        this.setState({
            counter: current+1
        });
    };
    
    render(){
        return(
            <div>
                <h1>Increment counter on button click using state</h1>
                <div> 
                    <button onClick={this.handleClick} >{this.state.counter}</button>       
                </div>
            </div>
        );
    }
}

let mountNode = document.getElementById('appContainer');
render(<StateDemo/>, mountNode);