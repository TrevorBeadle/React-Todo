import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitTask = (e) => {
    this.setState({ task: "" });
    this.props.addTask(e, this.state.task);
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.props.clearCompleted(e);
  };

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.handleChanges}
        />
        <button>Add</button>
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
