import React from 'react';
import ReactDOM from 'react-dom';
//import './reset.css';
import '../sass/main.scss';
import {Hello} from './Hello.jsx';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Hello />;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
