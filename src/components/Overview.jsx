import * as React from "react";

function Overview(props) {
  return (
    <li className="list-group-item">
      <input
        type="checkbox"
        id="doneCheckbox"
        checked={props.task.done}
        onChange={() => props.updateTask(props.task.id)}
        disabled={props.task.done}
      />
      <span>{props.task.task}</span>
    </li>
  );
}

export default Overview;
