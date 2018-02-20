import React from 'react';
import RoomList from '../RoomList/RoomList';
import PropTypes from 'prop-types';
import ChatWindow from '../ChatWindow/ChatWindow';
import UserList from '../UserList/UserList';

class MainContent extends React.Component {

    constructor () {
        super();
        this.login = this.login.bind(this);
        this.state =  {
            currentRoom: 'lobby'
        }
    }
    render () {
        this.login();
        return(
            <div id="mainContent">
                <div id='rooms'><RoomList /></div>
                <div id="container">
                    <div id="chatWindow"><ChatWindow>{this.state.currentRoom}</ChatWindow></div>
                    <div id="inputWindow">inputWindow</div>
                </div>
                <div id="userList"><UserList/></div>
            </div>
        );
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