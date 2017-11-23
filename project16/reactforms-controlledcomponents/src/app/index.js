import React from "react";
import { render } from "react-dom";

class MyControlledComponent extends React.Component
{
    constructor(props){
        super(props);
        this.state={text:''};
        this.handleChange = this.handleChange.bind(this);
    };
    
    handleChange(e){
        const newText = e.target.value;
        this.setState({text:newText});
    }
    
    render(){
        return(
            <div>
                <div> 
                        <h3> Controlled Components </h3> 
                        <input type="text" onChange={this.handleChange} value={this.state.text} width={150} />
                        <p> Current Text: {this.state.text} </p>
                      </div>
            </div>
        );
    }
}

let mountNode = document.getElementById('appContainer');
render(<MyControlledComponent />, mountNode);