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

        if(this.state.msg.startsWith('/')) {
            let theString = this.state.msg;
            let nickname;
            let spacePosition = theString.indexOf(' ');
            if (spacePosition === -1) {
                nickname = theString;
            } else {
                nickname = theString.substr(1, spacePosition-1);
            }
            nickname.replace(' ', '');
            let nick = nickname.toString();
            theString = theString.substring(spacePosition, theString.length);
            const { socket } = this.context;
            socket.emit('privatemsg',{ nick: nick, message: theString }, function (response) {
                console.log(response);
            });
        } else {
            const { socket } = this.context;
            socket.emit('sendmsg',{ roomName: this.props.children, msg: this.state.msg });
        }

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
            </div>
        );
    }
};

InputBox.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default InputBox;