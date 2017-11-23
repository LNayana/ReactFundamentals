import React from "react";
import { render } from "react-dom";
import {SubSections} from "./subsections.js";

const Page = (props) =>{
        return (
            <div>
                <SubSections heading='Header' bgcolor='lightblue' height={50} />
                <SubSections heading='Body' bgcolor='lightgreen' height={500} />
                <SubSections heading='Footer' bgcolor='lightgray' height={50} />
            </div>
        );
};

let mountNode = document.getElementById('appContainer');
render(<Page />, mountNode);