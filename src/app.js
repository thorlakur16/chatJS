import React from 'react';
import ReactDOM from 'react-dom';
import clientSocket from 'socket.io-client';
import PropTypes from 'prop-types';
import MainContent from './components/MainContent/MainContent';
//import Login from './components/Login/Login';
//import UserList from './components/UserList/UserList';
import '../styles/site';
//import ChatWindow from './components/ChatWindow/ChatWindow';
//import MakeRoom from './components/MakeRoom/MakeRoom';
//import UserList from './components/UserList/UserList';


class App extends React.Component {

    getChildContext() {
        return {socket: clientSocket('http://localhost:8080')};
    }

    constructor(props) {
        super(props);
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
