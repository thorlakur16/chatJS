import React from 'react';
import PropTypes from 'prop-types';

class UserList extends React.Component {

    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        const { socket } = this.context;
        socket.on('userlist', (userlist) => {
            let users = Object.assign([], this.state.users);
            users = [];
            for(var i = 0; i < userlist.length; i++) {
                users.push(userlist[i]);
            }
            this.setState({ users });
        });
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                <div><b>User list:</b></div>
                {users.map(m => ( <div className={'roomListItem'} key={m}>{m} </div> ))}
            </div>
        );
    }
}

UserList.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default UserList;
