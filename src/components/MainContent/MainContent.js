import React from 'react';
import RoomList from '../RoomList/RoomList';
import PropTypes from 'prop-types';
import ChatWindow from '../ChatWindow/ChatWindow';
import UserList from '../UserList/UserList';
import InputBox from '../InputBox/InputBox';

class MainContent extends React.Component {

    constructor () {
        super();
        this.login = this.login.bind(this);
        this.changeCurrentRoom = this.changeCurrentRoom.bind(this);
        this.state =  {
            currentRoom: 'lobby'
        }
    }
    render () {
        this.login();
        return(
            <div id="mainContent">
                <div id='rooms'><RoomList changeCurrentRoom={this.changeCurrentRoom}/></div>
                <div id="container">
                    <div id="chatWindow"><ChatWindow>{this.state.currentRoom}</ChatWindow></div>
                    <div id="inputWindow"><InputBox>{this.state.currentRoom}</InputBox></div>
                </div>
                <div id="userList"><UserList/></div>
            </div>
        );
    }

    changeCurrentRoom(rm) {
        this.setState({currentRoom: rm});
    }

    login () {
        const { socket } = this.context;
        socket.emit('adduser', 'Laki', function (available) {
            if(available) {
                console.log('user is available');
            }else {
                console.log('user already exists');
            }
        });
    }
}

MainContent.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default MainContent;