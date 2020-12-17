import React, { Component } from 'react';

class KindnessForm extends Component{

state = {
    action: "",
    category: ""
}


handleSubmit = (event) => {
    event.preventDefault()
    this.props.addKindness(this.state)
    event.target.reset()
}


handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    //in linr 18, "name" is = to the first part of the *name* ="image"
}

render() {
    return (
        <div className="container">
            <form className="add-toy-form" onSubmit={this.handleSubmit}>
                <h3>Create a new RAK!</h3>
                <input type="text" name="action" placeholder="New RAC..." className="input-text" value={this.state.action} onChange={this.handleChange}/>
                <br/>
                <input type="text" name="category" placeholder="Enter Category..." className="input-text" value={this.state.category} onChange={this.handleChange}/>
                <br/>
                <input type="submit" name="submit" value="Create new RAC!" className="submit"/>
            </form>
        </div>
    );
}

}


export default KindnessForm;