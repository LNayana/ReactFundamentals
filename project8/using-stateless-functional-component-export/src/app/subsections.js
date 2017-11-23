import React from "react";

export const SubSections = (props) =>{
        const bgStyle={
            background: props.bgcolor,
            height: props.height
        };
        
        return (
            <div style={bgStyle}>
                <h1>{props.heading}</h1>
            </div>
        );
};
