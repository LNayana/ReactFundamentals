import React from "react";
import { render } from "react-dom";

const imageList=[
        'https://docs.microsoft.com/en-us/appcenter/media/logo_react.svg',
        'https://webpack.js.org/6bc5d8cf78d442a984e70195db059b69.svg',
        'https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg',
        'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png',
        'http://code.naustud.io/code-guide/img/css-logo.svg'
    ];


class ImageGallery extends React.Component
{
    state={gallerycounter:0,counter:0};
    
    handleClick =() =>{
        let current= this.state.gallerycounter;
            const next = ++current % imageList.length;
       this.setState({
                gallerycounter: next
            });
    };
    
    incrementCounter= () =>{
        this.setState((prevState)=>({
            counter: prevState.counter +1
        }));
    };

    render(){
        return(
            <div>
                <h1>Logo gallery using state</h1>
                <div> 
                    <img src={imageList[this.state.gallerycounter]} width={100} />
                    <button onClick={this.handleClick} > >> </button>       
                </div>
                <div>
                    <h1>Increment counter on button click : using prevState</h1>
                    <button onClick={this.incrementCounter} > {this.state.counter} </button>   
                </div>
            </div>
        );
    }
}

let mountNode = document.getElementById('appContainer');
render(<ImageGallery />, mountNode);