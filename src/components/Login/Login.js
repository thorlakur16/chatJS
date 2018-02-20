import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error:'',
            nickname:''
        };
      
        this.updateName = this.updateName.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    render() {
        const {error,nickname} = this.state;
        return (
            <div className="login-back">
                <form onSubmit={this.onLogin}>
                    <label>Username:</label>
                    <input
                        ref={(input)=>{ this.textInput = input }}
                        type='text'
                        id='user'
                        value={nickname}
                        onChange={this.updateName}
                        placeholder={'MyUsername'}
                    />
                    <input type="button" id="submit" value="Login" onClick={this.onLogin}/>
                    <div id='error'>{error ? error:null}</div>
                </form>
            </div>
        )
    }

    updateName(e) {
        this.setState({nickname:e.target.value});
    }

    onLogin(e) {
        e.preventDefault();
        const { socket } = this.context;
        const {nickname} = this.state;
        socket.emit('adduser', nickname, function (available) {
            if(available) {
                console.log('user is available');
                let user = nickname;
                let isLogedIn = available;
                this.props.userHandler(user);
                this.props.loginHandler(isLogedIn);
                this.setState({error:''});
            }else {
                console.log('user already exists');
            }
        }.bind(this));
        socket.emit('users');
        socket.emit('joinroom', {room: 'lobby'},  function (response) {
            console.log(response);
        });
    }
}

Login.contextTypes = {
    socket: PropTypes.object.isRequired
};

export default Login;