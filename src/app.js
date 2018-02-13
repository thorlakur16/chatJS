import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/site';
import Login from './components/Login/Login';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Login />
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
