import React from "react";
import { render } from "react-dom";

const Header = (props) =>{
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
};

const Body = (props) =>{
        return (
            <div>
                <h1>Body</h1>
            </div>
        );
};

const Footer = (props) =>{
        return (
            <div>
                <h1>Footer</h1>
            </div>
        );
};

class PageContainer extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
};

let mountNode = document.getElementById('appContainer');
render(<PageContainer />, mountNode);