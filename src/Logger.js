import React from 'react';


class Logger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }


    render() {
        return (<h1>{this.props.time}</h1>)
    }
}


export default Logger;