import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div className="login-back">
                <label for="user">Username:</label>
                <input type="text" name="user" id="user" ></input>
                <br />
                <input type="button" id="submit" value="Login"/>
            </div>
        )
    }
};

export default Login;