import React from 'react';
import ReactDOM from 'react-dom';
import clientSocket from 'socket.io-client';
import PropTypes from 'prop-types';
import MainContent from './components/MainContent/MainContent';
import '../styles/site';


class App extends React.Component {

    getChildContext() {
        return {
            socket: this._socket
        };
    }

    constructor(props) {
        super(props);
        const socket = clientSocket('http://localhost:8080');
        this._socket = socket;
    }
    render() {
        return (
            <MainContent />
        );
    }
}

App.childContextTypes = {
    socket: PropTypes.object.isRequired
};


ReactDOM.render(<App />, document.getElementById('app'));
