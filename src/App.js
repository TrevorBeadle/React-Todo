import React from "react";
import TodoList from "./components/TodoList";
import "./components/Todo.css";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          task: "Organize Garage",
          id: 1245,
          completed: false,
        },
        {
          task: "Bake Cookies",
          id: 1221,
          completed: false,
        },
      ],
    };
  }

  componentDidMount() {
    this.setState({ tasks: JSON.parse(localStorage.getItem("tasks")) });
  }

  toggleTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((item) => {
        return taskId === item.id
          ? { ...item, completed: !item.completed }
          : item;
      }),
    });
  };

  updateLocalStorage = () =>
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));

  addTask = (e, item) => {
    e.preventDefault();
    const newTask = {
      task: item,
      id: Date.now(),
      completed: false,
    };
    this.setState(
      {
        tasks: [...this.state.tasks, newTask],
      },
      this.updateLocalStorage
    );
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState(
      {
        tasks: this.state.tasks.filter((task) => !task.completed),
      },
      this.updateLocalStorage
    );
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} />
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
