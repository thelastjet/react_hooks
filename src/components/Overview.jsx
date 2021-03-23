import React from "react";
import Task from "./Task";

const Overview = ({ tasks, handleTaskDoneToggle, handleResetTaskList }) => {
  return (
    <section>
      <h3>Tasks</h3>
      {tasks.length > 0 ? (
        <button className="btn btn-danger" onClick={handleResetTaskList}>
          Clear All
        </button>
      ) : (
        null
      )}

      {tasks.map((value, index) => {
        return (
          <Task
            key={index + value.content}
            index={index}
            content={value.content}
            done={value.done}
            handleTaskDoneToggle={handleTaskDoneToggle}
          />
        );
      })}
    </section>
  );
};

export default Overview;
