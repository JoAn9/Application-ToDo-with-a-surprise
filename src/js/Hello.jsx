import React from 'react';
import ReactDOM from 'react-dom';
// import './main.scss';

import {ToDo} from "./ToDo.jsx";

export class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            band : '',
            nameText: '',
            bandText: '',
            submited: false,
            helloPage: false,
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
            helloPage: false,
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

    handleHelloReturn = event => {
        this.setState({
            helloPage: true,
            submited: false,
        })
    };

    render() {
        if(this.state.helloPage) {
            return <Hello />
        }
        if(this.state.submited) {
            return <div className="container template">
                <ToDo userName={this.state.name} band={this.state.band} />;

                <input
                    className="btn btn-primary btn-lg btn-return"
                    type="submit"
                    value="Wróć"
                    onClick={this.handleHelloReturn}/>
            </div>
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
                <footer>
                    Copyright 2018 | All Rights Reserved. - JoAn9___
                    <a href='https://pl.freepik.com/darmowe-zdjecie/rama-z-urz-dem-urz-dze-na-bia-ym-biurko_1147875.htm'>
                        Tła z Freepik
                    </a>

                </footer>
            </div>
        );
    }
}
