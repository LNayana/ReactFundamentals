import React from "react";
import { render } from "react-dom";
import {Child} from './child.js';
import {Sibling} from './sibling.js';


class Parent extends React.Component
{
    constructor(props){
        super(props);
        this.state={color:'red'};
        this.changeColor= this.changeColor.bind(this);
    }

    changeColor(currentColor){
        this.setState({
            color:currentColor
        });
    };
    
    render(){
        const bgColor = {
         background:this.state.color,
            height:500
        };
        return(
            <div style={bgColor}>
                <Child onChange={this.changeColor} />
                <Sibling color={this.state.color} />
            </div>
        );
    }
}

let mountNode = document.getElementById('appContainer');
render(<Parent />, mountNode);