import React from 'react';
import ReactDOM from 'react-dom';
import {ToDo} from "./ToDo.jsx";
import {Youtube} from "./Youtube.jsx";


export class Congratulation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoPage: false,
        };
    }

    handleReturn = event => {
        this.setState({
            todoPage: true,
        })
    };

    render() {
        if(this.state.todoPage) {
            return <ToDo />
        } else {
            return (
                <div>
                    <h1>CONGRATULATIONS {this.props.userName}!</h1>

                    <Youtube band={this.props.band} />

                </div>
            );
        }
    }
}

