import React from 'react';
import PropTypes from 'prop-types';
import MakeRoom from '../MakeRoom/MakeRoom';

class RoomList extends React.Component {

    componentDidMount() {
        const { socket } = this.context;
        socket.emit('rooms');
        socket.on('roomlist', (roomlist) => {
            let rooms = Object.assign([], this.state.rooms);
            rooms = [];
            for(var o in roomlist) {
                rooms.push(o);
            }
            this.setState({ rooms });
        });
    }

    constructor(props) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
        this.state = {
            rooms: []
        };
    }

    render() {
        const { rooms } = this.state;
        return (
            <div className='roomList'>
                <div><b>Available rooms:</b></div>
                <div id='listOfRooms'>
                    {rooms.map(m => ( <div onClick={this.onItemClick} className={'roomListItem'} key={m}>{m} </div> ))}
                </div>
                <div >........</div>
                <div><MakeRoom/></div>
                <button type="button" className="leaveButton" onClick={() => this.props.onLeave('lobby')}>Leave room</button>
            </div>
        );
    }

    onItemClick (event) {
        let curr = event.currentTarget.innerText;
        this.props.changeCurrentRoom(curr);
    };


}

RoomList.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default RoomList;