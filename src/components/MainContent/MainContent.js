import React from 'react';
import RoomList from '../RoomList/RoomList';
import PropTypes from 'prop-types';
import ChatWindow from '../ChatWindow/ChatWindow';
import UserList from '../UserList/UserList';
import InputBox from '../InputBox/InputBox';

class MainContent extends React.Component {

    constructor () {
        super();
        this.changeCurrentRoom = this.changeCurrentRoom.bind(this);
        this.onLeave = this.onLeave.bind(this);
        this.state =  {
            currentRoom: ''
        }
    }
    render () {
        return(
            <div id="mainContent">
                <div id='rooms'><RoomList changeCurrentRoom={this.changeCurrentRoom}/></div>
                <div id="container">
                    <div id="chatWindow"><ChatWindow>{this.state.currentRoom}</ChatWindow></div>
                    <div id="inputWindow"><InputBox onLeave={this.onLeave}>{this.state.currentRoom}</InputBox></div>
                </div>
                <div id="userList"><UserList/></div>
            </div>
        );
    }




    onLeave() {
        const {socket} = this.context;
        socket.emit('partroom',this.currentRoom);
        this.setState({currentRoom:''});
    }
    changeCurrentRoom(rm) {
        this.setState({currentRoom: rm});
        const { socket } = this.context;
        socket.emit('joinroom', {room: rm},  function (response) {
            console.log(response);
        });
    }


}

MainContent.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default MainContent;