import React from "react";
import { render } from "react-dom";
//require ('./custom.css');

class UsingClassName extends React.Component
{
    render(){
        return (
            <h1 className="header"> Hello World ! </h1>
        );
    }
}
let mountNode = document.getElementById('appContainer');
render(<UsingClassName />, mountNode);