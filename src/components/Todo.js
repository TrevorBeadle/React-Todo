import React from "react";
import "./Todo.css";

export default function (props) {
  return (
    <div
      className={`item${props.task.completed ? " completed" : ""}`}
      onClick={() => props.toggleTask(props.task.id)}
    >
      <p>{props.task.task}</p>
    </div>
  );
}
