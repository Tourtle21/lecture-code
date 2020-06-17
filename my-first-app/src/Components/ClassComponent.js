//Import the React Package, as well as Component
import React, {Component} from 'react';

//Create a JavaScript class
class ClassComponent extends Component {
    //render method: REQUIRED to return display
    constructor() {
        super();
        this.state = {
            name: 'Kaden',
            age: 20,
            nameInput: '',
        }
    }

    handleInput = (event) => {
        this.setState({nameInput: event.target.value})
    }

    render() {
        // const mappedFriends = this.state.friends.map((element, i) => (
        //     <div key={i}>
        //         <img src={element.picture} alt={element.name}/>
        //         <span>{element.name}</span>
        //     </div>
        // ))

        return (
            <div>
                <p>My name is {this.state.name} and I am {this.state.age} years old! Your name is {this.state.nameInput}</p>
                <input onChange={(e) => this.handleInput(e)} placeholder="Type Name Here" />
            </div>
        )
        // {mappedFriends}
    }
}

//export component to make it available to other components/files
export default ClassComponent;