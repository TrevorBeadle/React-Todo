import React from "react";
import Todo from "./Todo";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export default function TodoList(props) {
  return (
    <div>
      {props.tasks.map((task) => {
        return <Todo key={task.id} task={task} toggleTask={props.toggleTask} />;
      })}
    </div>
  );
}
