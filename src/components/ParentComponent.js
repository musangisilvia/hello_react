import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        this.greeParent = this.greeParent.bind(this)
    }

    greeParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greeParent}/>
            </div>
        )
    }
}

export default ParentComponent
