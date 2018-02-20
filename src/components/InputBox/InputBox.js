import React from 'react';
import { PropTypes } from 'prop-types';

class InputBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        };
    }
    sendMessage() {
        const { socket } = this.context;
        socket.emit('sendmsg',{ roomName: this.props.children, msg: this.state.msg });
        this.setState({ msg: '' });
    }
    render() {
        const {  msg } = this.state;
        return (
            <div className="input-box">
                <textarea type="text"
                          value={msg}
                          className="input input-big"
                          onInput={(e) => this.setState({ msg: e.target.value })}>
                </textarea>

                <button type="button" className="inputButton" onClick={() => this.sendMessage()}>Send</button>
                <button type="button" className="leaveButton" onClick={() => this.props.onLeave}>Leave</button>
            </div>
        );
    }
};

InputBox.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default InputBox;