import React from "react";

export class Child extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        const selectedColor = e.target.value;
        this.props.onChange(selectedColor);
    }
    
    render(){
        return(
            <div>
                <select id="ddwnChangeColor" onChange={this.handleChange}>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                </select>
            </div>
        );
    }
}