import React from 'react';

class ClassCouner extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }   

   decrement = () => this.setState({count:this.state.count - 1})

    render() {
        return (
            <div>
                <h1>Class Counter</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}