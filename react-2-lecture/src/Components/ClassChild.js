import React, {Component} from 'react';

class ClassChild extends Component {
    render() {
        return (
        <div>My name is {this.props.myName} and my favorite number is {this.props.faveNum}</div>
        )
    }
}

export default ClassChild;