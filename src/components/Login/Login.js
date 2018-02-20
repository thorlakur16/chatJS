import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {

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
                <input type="text" name="user" id="user" onChange={this.updateName} />

                <input type="button" id="submit" value="Login" onClick={this.onLogin}/>

            </div>

        )
    }

    updateName(e) {
        this.name = e.target.value;
    }

    onLogin() {
        const { socket } = this.context;
        socket.emit('adduser', this.name, function (available) {
            if(available) {
                console.log('user is available');
            }else {
                console.log('user already exists');
            }
        });
    }

}

Login.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default Login;