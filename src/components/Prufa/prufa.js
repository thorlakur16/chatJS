import React from 'react';

class Prufa extends React.Component {
    render() {
        return (
            <div className="container">{this.props.children}</div>
        )
    }
};

export default Prufa;
