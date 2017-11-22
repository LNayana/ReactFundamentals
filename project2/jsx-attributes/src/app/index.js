import React from "react";
import { render } from "react-dom";

class MyJSXAttributes extends React.Component
{
    render(){
        let todoList = this.props.todos;
        let listItems = todoList.map(function(todo){
                return <li key={todo}> {todo} </li>;
        });
       
        if(this.props.display === true){
        return(
            <div>
                <h1>Welcome to JSX attributes demo</h1>
                <div> 
                        <h3> Welcome in {this.props.label} {this.props.year}! </h3> 
                        {listItems}
                      </div>
            </div>
        );
        }else{
            return(
            <div>
                <h1>Welcome to JSX attributes demo - nothing to display</h1>
            </div>
        );
        }
    }
}

let mountNode = document.getElementById('appContainer');

render(<MyJSXAttributes label='World' year={2017} display={true} todos={['Master in React','Learn Webpack', 'Learn Git','Have fun!!']} />, mountNode);