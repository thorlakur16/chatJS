import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error:''
        };
        this.updateName = this.updateName.bind(this);
        this.onLogin = this.onLogin.bind(this);
        //this.getUsers = this.getUsers.bind(this);
    }

    render() {
        const {error} = this.state;
        return (
            <div className="login-back">
                <label>Username:</label>
                <input type="text" name="user" id="user" onChange={this.updateName}/>

                <input type="button" id="submit" value="Login" onClick={this.onLogin}/>
                <div id='error'>{error ? error:null}</div>

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
                let user = this.name;
                console.log(user);
                let isLogedIn = available;
                console.log(isLogedIn);
                this.props.userHandler(user);
                this.props.loginHandler(isLogedIn);
                this.setState({error:''});
            }else {
                console.log('user already exists');
                this.setState({error:'Username Taken'});
            }
        }.bind(this));
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