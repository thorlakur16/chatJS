import React from 'react';
import ReactDOM from 'react-dom';
import clientSocket from 'socket.io-client';
import PropTypes from 'prop-types';
import MainContent from './components/MainContent/MainContent';
//import Login from './components/Login/Login';
//import UserList from './components/UserList/UserList';
import '../styles/site';
import {Switch, Route,BrowserRouter, Redirect,withRouter} from 'react-router-dom';
import Login from './components/Login/Login';
//import RoomList from './components/RoomList/RoomList';
//import ChatWindow from './components/ChatWindow/ChatWindow';
//import MakeRoom from './components/MakeRoom/MakeRoom';
//import UserList from './components/UserList/UserList';


class App extends React.Component {

    getChildContext() {
        return {socket: clientSocket('http://localhost:8080')};
    }

    constructor(props) {
        super(props);

        this.state = {
            user:'',
            userLogedIn:false
        };
        this.userHandler = this.userHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
    }

    userHandler(nickname) {
        this.setState({users:nickname});
        console.log(nickname);

    }

    loginHandler(signedIn) {
        this.setState({userLogedIn:signedIn});
        console.log(this.state.userLogedIn);
        if(this.state.userLogedIn) {
            this.props.history.push('/chatboard');
            console.log('push worked');
        }
    }
    render() {
        const {isLogedIn} = this.state.userLogedIn;
        return (
            <Switch>
                <Route exact path='/' render={ () => {
                    if(isLogedIn) {
                        return <Redirect to='/chatboard'/>;
                    }else {
                        return <Redirect to='/login'/>;
                    }
                }
                }/>
                <Route path='/login' render={(routeProps) => (
                    <Login {...routeProps} userHandler={this.userHandler} loginHandler={this.loginHandler}/>
                )}/>
                <Route path='/chatboard' component={MainContent} />
            </Switch>

        );
    }
}

App.childContextTypes = {
    socket: PropTypes.object.isRequired
};

const AppWithRouter = withRouter(App);
ReactDOM.render(<BrowserRouter><AppWithRouter /></BrowserRouter>, document.getElementById('app'));

