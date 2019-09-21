import React, { Component } from 'react';
import uuid from 'uuid/v4'

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmint = this.handleSubmint.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmint(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid() });
    this.setState({
      task: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmint}>
        <label htmlFor='task'>New Todo</label>
        <input
          type="text"
          placeholder="New Todo"
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default NewTodoForm;

