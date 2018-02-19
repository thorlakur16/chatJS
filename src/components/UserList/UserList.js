import React from 'react';
import PropTypes from 'prop-types';
import Login from '../Login/Login';
import MakeRoom from '../MakeRoom/MakeRoom';

class UserList extends React.Component {

    constructor() {
        super();
        this.users = [];
        this.state = {
            users: []
        };

    }

    componentDidMount() {
        this.context.socket.emit('users');
        this.context.socket.on('userlist', (userlist) => {
            console.log(userlist);
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
        console.log(this.users);
        return (
            <div>
                {users.map(m => ( <div key={m}>{m} </div> ))}
            </div>
        );
    }

}

UserList.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default UserList;
