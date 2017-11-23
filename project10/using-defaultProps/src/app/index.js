import React from "react";
import { render } from "react-dom";

class DefaultPropsComponent extends React.Component
{
    render(){
        return(
            <div>
                <h1>Default Props Demo</h1>
                <div> 
                        <h3> Welcome {this.props.user}! </h3> 
                </div>
            </div>
        );
    }
}

DefaultPropsComponent.defaultProps={
    user:'Dear'
};

let mountNode = document.getElementById('appContainer');

//It will display Dear as props user is not passed.
render(<DefaultPropsComponent />, mountNode);

//It will display Tom, as props is set.
//render(<DefaultPropsComponent user="Tom" />, mountNode);