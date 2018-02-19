import React from 'react';
//import { PropTypes } from 'prop-types';

class MainContent extends React.Component {

    render () {
        return(
            <div id="mainContent">
                <div id='rooms'>rooms</div>
                <div id="container">
                    <div id="chatWindow">chatWindow</div>
                    <div id="inputWindow">inputWindow</div>
                </div>
                <div id="userList">userList</div>
            </div>
        );
    }
}

export default MainContent;