import React from 'react';
import { PropTypes } from 'prop-types';

class ChatWindow extends React.Component {
    componentDidMount() {
        // Register emission handler
        const { socket } = this.context;
        socket.on('updatechat',  (room, msg) => {
            console.log(room);
            let messages = Object.assign([], this.state.messages);

            messages.push(`${(new Date()).toLocaleTimeString()} - ${msg[msg.length-1].nick} : ${msg[msg.length-1].message}`);

            this.setState({ messages });
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
            <div className="chatwindow">
                <h2>{this.props.children}</h2>
                {messages.map(m => ( <div key={m}>{m}</div> ))}
            </div>
        );
    }
};

ChatWindow.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default ChatWindow;