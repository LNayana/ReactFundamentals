import React from "react";
import { render } from "react-dom";

class MyJSXElement extends React.Component
{
    render(){
        return(
            <div>
                <h1> This is a JSX element </h1>
            </div>
        );
    }
}

let mountNode = document.getElementById('appContainer');

render(<MyJSXElement />,mountNode);