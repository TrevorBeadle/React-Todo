import React from "react";

export default function (props) {
  return (
    <div onClick={() => props.toggleTask(props.task.id)}>
      <p>{props.task.task}</p>
    </div>
  );
}
