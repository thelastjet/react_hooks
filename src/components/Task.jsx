import React from "react";

const Task = ({ index, content, done, handleTaskDoneToggle }) => {
  return (
    <div className="d-flex justify-content-between">
      <h6>{content}</h6>
      <input
        type="checkbox"
        name="done"
        id={index + content}
        checked={done}
        onChange={(event) => handleTaskDoneToggle(event.target.id)}
      />
    </div>
  );
};

export default Task;
