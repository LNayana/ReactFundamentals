import React from "react";
import { render } from "react-dom";

class EventHandler extends React.Component
{
    getMessage(){
        alert('You clicked a button!');
    };
    
    render(){
        return(
            <div>
                <p>Event handler demonstration - display alert on button click</p>
                <button onClick={this.getMessage}>Display Message</button>
            </div>
        );
    }
}

let mountNode = document.getElementById('appContainer');

render(<EventHandler />, mountNode);