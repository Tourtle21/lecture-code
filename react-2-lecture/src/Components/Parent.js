import React, {Component} from 'react';
import Child from './Child';
import ClassChild from './ClassChild';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myName: 'Kaden',
            faveNum: 21
        }
    }


    handleNameChange = () => this.setState({myName: this.state.myName === 'Kaden' ? 'Steve' : 'Kaden'})
 

    render() {
        // const {myName, faveNum} = this.state;
        return (
            <div>
                <Child myName={this.state.myName} faveNum={this.state.faveNum} nameFn={this.handleNameChange}/>
                <ClassChild myName={this.state.myName} faveNum={9} />
            </div>
        )
    }
}

export default Parent;