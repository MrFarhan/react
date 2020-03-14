import React from 'react';


class Events extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Counter: 0,
            increment: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }
    increment() {
        this.setState({
            Counter: this.state.Counter + 1
        })

    }

    decrement() {
        this.setState({
            Counter: this.state.Counter - 1
        })

    }
    render() {

        console.log(this.state.increment, "increment")
        console.log(this.state.counter, "increment")

        return (
            <div>
                <h1>Counter App</h1>
                <button onClick={this.increment}> Add </button>
                <button onClick={this.decrement}> substract </button>
                <span>{this.state.Counter}</span>

            </div>

        )
    }


}

export default Events;