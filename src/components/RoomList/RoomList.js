import React from 'react';
import PropTypes from 'prop-types';
import MakeRoom from '../MakeRoom/MakeRoom';

class RoomList extends React.Component {

    componentDidMount() {
        this.context.socket.emit('rooms');
        this.context.socket.on('roomlist', (roomlist) => {
            console.log(roomlist);
            let rooms = Object.assign([], this.state.rooms);
            for(var o in roomlist) {
                rooms.push(o);
            }
            console.log(rooms);
            this.setState({rooms});
        });
    }

    constructor() {
        super();
        this.state = {
            rooms: []
        };
    }

    render() {
        const { rooms } = this.state;
        return (
            <div className='roomList'>
                <div><b>Available rooms:</b></div>
                <div>
                    {rooms.map(m => ( <div onClick={this.onItemClick} className={'roomListItem'} key={m}>{m} </div> ))}
                </div>
                <div >........</div>
                <div><MakeRoom/></div>
            </div>
        );
    }

    onItemClick (event) {
        this.state.currentRoom = event.currentTarget.innerText;
    };


}

RoomList.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default RoomList;