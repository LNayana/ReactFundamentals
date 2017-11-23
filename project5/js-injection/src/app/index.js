import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';

class JSInjection extends React.Component
{
    getSum(no1,no2){
        return no1*no2;
    };
    
    render(){
        const no1 = this.props.num1;
        const no2= this.props.num2;
        return(
            <div>
                <h1> Demonstration of Javascript Injection in JSX </h1>
                <p> SUM of 2 + 3 = { 2 + 3 } </p>
                <p> Course name using props = {this.props.course} </p>
                <p> Using function : {no1} + {no2} = {this.getSum(no1,no2)} </p>
            </div>
        );
    }
}

JSInjection.propTypes = {
    course:PropTypes.string,
    num1: PropTypes.number,
    num2:PropTypes.number
};


let mountNode = document.getElementById('appContainer');
render(<JSInjection course="React.Js" num1={2} num2={3} />, mountNode);