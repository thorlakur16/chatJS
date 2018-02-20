import React from 'react';
import RoomList from '../RoomList/RoomList';
import PropTypes from 'prop-types';
import ChatWindow from '../ChatWindow/ChatWindow';

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
        console.log('222222'+this.state.currentRoom);
        return(
            <div id="mainContent">
                <div id='rooms'><RoomList /></div>
                <div id="container">
                    <div id="chatWindow"><ChatWindow>{this.state.currentRoom}</ChatWindow></div>
                    <div id="inputWindow">inputWindow</div>
                </div>
                <div id="userList">userList</div>
            </div>
        );
    }

    login () {
        this.context.socket.emit('adduser', 'Laki', function (available) {
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