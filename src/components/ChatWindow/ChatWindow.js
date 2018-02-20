import React from 'react';
import { PropTypes } from 'prop-types';

class ChatWindow extends React.Component {
    componentDidMount() {
        // Register emission handler
        const { socket } = this.context;
        socket.on('updatechat',  (room, msg) => {
            if(room == this.props.children) {
                let messages = Object.assign([], this.state.messages);
                messages = [];
                for(var o in msg) {
                    messages.push(`${msg[o].timestamp} - ${msg[o].nick} : ${msg[o].message}`);
                }
                this.setState({ messages });
            }
        });

        socket.on('recv_privatemsg', (nick, msg) => {
            alert(nick +': ' +msg);
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    render() {
        const { messages } = this.state;
        return (
            <div className='chatwindow'>
                <b>{this.props.children}</b>
                {messages.map(m => ( <div key={m}>{m}</div> ))}
            </div>
        );
    }
};

ChatWindow.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default ChatWindow;