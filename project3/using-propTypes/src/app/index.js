import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';

class UsingPropTypes extends React.Component
{
    render(){
        return (
            <h1> Hello {this.props.label} {this.props.year}! </h1>
        );
    }
}
let mountNode = document.getElementById('appContainer');


//pass string,number parameter
UsingPropTypes.propTypes = {
  label:PropTypes.string,
  year:PropTypes.number
};

render(<UsingPropTypes label='World' year={2017} />, mountNode);


/*
// label property is mandatory, but not passed. Will throw error.
UsingPropTypes.propTypes = {
  label:PropTypes.string.isRequired,
  year:PropTypes.number
};

render(<UsingPropTypes year={2017} />, mountNode);
*/

/*
//year property should be of number type, but string is passed. It will throw error.
UsingPropTypes.propTypes = {
  label:PropTypes.string,
    year:PropTypes.number
};

render(<UsingPropTypes label='World' year="2017" />, mountNode);
*/