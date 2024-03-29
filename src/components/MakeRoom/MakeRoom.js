import React from 'react';
import { PropTypes } from 'prop-types';

class MakeRoom extends React.Component {

    constructor() {
        super();
        this.makeRoom = this.makeRoom.bind(this);
        this.updateRoomName = this.updateRoomName.bind(this);
    }

    render() {
        return (
            <div className="makeRoom">
                <label>Make new room:</label>
                <input type="text" name="room" id="roomName" onChange={this.updateRoomName} />
                <input type="button" id="makeRoom" value="Make room" onClick={this.makeRoom}/>
            </div>
        );
    }

    updateRoomName (e) {
        this.name = e.target.value;
    }

    makeRoom () {
        const { socket } = this.context;
        socket.emit('joinroom', {room: this.name}, function () {
            console.log('room created');
        });
        socket.emit('rooms');
    }
}

MakeRoom.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default MakeRoom;