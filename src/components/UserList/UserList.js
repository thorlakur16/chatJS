import React from 'react';
import PropTypes from 'prop-types';

class UserList extends React.Component {

    constructor() {
        super();
        this.users = [];
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        const { socket } = this.context;
        socket.emit('users');
        socket.on('userlist', (userlist) => {
            let users = Object.assign([], this.state.users);
            for(var i = 0; i < userlist.length; i++) {
                users.push(userlist[i]);
            }
            this.setState({ users });
            this.render();
        });
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                <div><b>User list:</b></div>
                {users.map(m => ( <div key={m}>{m} </div> ))}
            </div>
        );
    }

}

UserList.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default UserList;
