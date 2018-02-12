import React from 'react';
import ReactDOM from 'react-dom';

import {ToDo} from './ToDo.jsx';
import {Footer} from './Footer.jsx';

export class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            band : '',
            nameText: '',
            bandText: '',
            submited: false,
        };
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value,
        })
    };

    handleBandChange = event => {
        this.setState({
            band: event.target.value,
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log("Wysłano");
        if(this.state.name.length < 2) {
            this.setState({
                nameText : 'Pole imię musi zostać uzupełnione',
            })
        }
        if(this.state.band.length < 2) {
            this.setState({
                bandText : 'Pole zespół musi zostać uzupełnione',
            })
        } else {
            this.setState({
                submited: true,
            })
        }
    };

    render() {
        if(this.state.submited) {
            return <ToDo userName={this.state.name} band={this.state.band} />
        }

        return (
            <div className="container hello">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Imię"
                        value={this.state.name}
                        onChange={this.handleNameChange}/>
                    <div>{this.state.nameText}</div>
                    <input
                        type="text"
                        placeholder="Ulubiony zespół muzyczny"
                        value={this.state.band}
                        onChange={this.handleBandChange}/>
                    <div>{this.state.bandText}</div>
                    <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Potwierdzam dane"/>
                </form>
                <Footer />
            </div>
        );
    }
}