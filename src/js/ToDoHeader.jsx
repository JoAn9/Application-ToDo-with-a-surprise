import React from 'react';
import ReactDOM from 'react-dom';


export class ToDoHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTime : new Date(),
        };
    }

    componentDidMount(){
        this.intervalId = setInterval(() => {
            this.setState({
                currentTime : new Date(),
            });
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render() {
        return <div>
            <header >
                <div>
                    {this.state.currentTime.toLocaleDateString()}
                </div>
                <div>
                    {this.state.currentTime.toLocaleTimeString()}
                </div>
                <h1>Hello {this.props.userName}</h1>
            </header>
        </div>
    }
}