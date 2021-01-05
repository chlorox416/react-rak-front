import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import '../Styles/KindnessForm.css';

class KindnessForm extends Component {
  state = {
    act: "",
    category: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addKindness(this.state);
    event.target.reset();
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    //in linr 18, "name" is = to the first part of the *name* ="image"
  };

  render() {
    return (

      <Form className="rak-form">
        <h3>Create a new RAK!</h3>
        <Form.Field>
          <label>Act:</label>
          <input
            type="text"
            name="act"
            placeholder="New RAK..."
            className="input-text"
            value={this.state.action}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            placeholder="Enter Category..."
            className="input-text"
            value={this.state.category}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type="submit">Create New RAK!</Button>
      </Form>
    );
  }
}

export default KindnessForm;
