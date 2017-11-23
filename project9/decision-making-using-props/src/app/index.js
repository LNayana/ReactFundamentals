import React from "react";
import { render } from "react-dom";

class DecisionMakingComponent extends React.Component
{
    render(){
        if(this.props.signedIn === true && this.props.user !== ''){
        return(
            <h1>Welcome { 'Dear ' + this.props.user } !</h1>
        );
        }else{
            return(
            <h1>Login</h1>
        );
        }
    }
}

let mountNode = document.getElementById('appContainer');
//Make condition false
render(<DecisionMakingComponent user='' signedIn={false} />, mountNode);

//Make condition true
//render(<DecisionMakingComponent user='Jerry' signedIn={true} />, mountNode);