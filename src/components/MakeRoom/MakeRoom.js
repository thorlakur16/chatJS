import React from 'react';
import { PropTypes } from 'prop-types';

class MakeRoom extends React.Component {

    componentDidMount() {
        this.context.socket.emit('rooms');
        this.context.socket.on('roomlist', (roomlist) => {
            console.log(roomlist);
            let rooms = Object.assign([], this.state.rooms);
            for (var o in roomlist) {
                rooms.push(o);
                console.log(rooms);
            }

            this.setState({rooms});
            this.render();
        });
    }

    constructor() {
        super();
        this.makeRoom = this.makeRoom.bind(this);
        this.updateRoomName = this.updateRoomName.bind(this);
        this.state = {
            rooms: []
        };
    }

    render() {
        const { rooms } = this.state;
        return (
            <div className="makeRoom">
                <label>Room name:</label>
                <input type="text" name="room" id="roomName" onChange={this.updateRoomName}></input>
                <input type="button" id="makeRoom" value="Make room" onClick={this.makeRoom}/>
                <div>Available rooms: </div>
                <div>{rooms.map(m => ( <div key={m}>{m} </div> ))}</div>
            </div>
        );
    }

    updateRoomName (e) {
        console.log(e);
        this.name = e.target.value;
    }

    makeRoom () {
        this.context.socket.emit('joinroom', {room: this.name}, function () {
            console.log('room created');
        });
    }
}

MakeRoom.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default MakeRoom;