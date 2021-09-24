import React, { Component } from 'react'
// never modify the state directly only use setState()
class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment() {
        // 
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
       console.log(this.state.count)
    }
    
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment Five</button>
            </div>
        )
    }
}

export default Counter
