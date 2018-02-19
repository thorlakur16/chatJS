import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {

    /*componentDidMount() {
        // Register emission handler
        const { socket } = this.context;
        socket.on('userlist', (userlist) => {
            console.log(userlist);
        });
    }*/

    constructor() {
        super();
        this.updateName = this.updateName.bind(this);
        this.onLogin = this.onLogin.bind(this);
        //this.getUsers = this.getUsers.bind(this);
    }

    render() {
        return (
            <div className="login-back">
                <label>Username:</label>
                <input type="text" name="user" id="user" onChange={this.updateName}></input>

                <input type="button" id="submit" value="Login" onClick={this.onLogin}/>

            </div>

        )
    }

    updateName(e) {
        this.name = e.target.value;
    }

    onLogin() {
        this.context.socket.emit('adduser', this.name, function (available) {
            if(available) {
                console.log('user is available');
            }else {
                console.log('user already exists');
            }
        });
    }

    /*getUsers() {
        console.log('try getting users');
        this.context.socket.emit('users', function (userlist) {
            console.log(userlist);

        });

    }*/


}

Login.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default Login;