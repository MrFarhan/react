import React, { Component } from 'react';
// import Digitalclock from './Digitalclock.js'
// import Analogclock from './Analogclock.js'
// import Logger from './Logger.js'
import Events from './Events.js'

class Clock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTime: new Date().toLocaleString(),
            counter: 0
        }
        this.updateTime();

    }


    updateTime() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString(),
                counter: this.state.counter + 1
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                {/* <Digitalclock time={this.state.currentTime} />
                <Analogclock time={this.state.currentTime} /> */}
                {/* {
                    (this.state.counter < 3) ?
                        (<Logger time={this.state.currentTime} />) :
                        (null)
                } */}
                {/* <Logger time={this.state.currentTime} /> */}


                <Events />

            </div>
        )
    }
}


export default Clock;