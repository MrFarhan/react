import React, { Component } from 'react';
import Digitalclock from './Digitalclock.js'


class Clock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTime: new Date().toLocaleString()
        }
        this.updateTime();
    }


    updateTime() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString()
            })
        }, 1000)
    }

    render() {
        return (<Digitalclock time={this.state.currentTime} />)
    }
}


export default Clock;