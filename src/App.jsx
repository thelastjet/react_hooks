import React from "react";
import Overview from "./components/Overview";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = React.useState([
    {
      task: "Work on app",
      id: 1,
      done: true,
    },
  ]);
  const [id, setId] = React.useState(2);

  React.useEffect(() => {
    console.log("App - Effect Hook");
    console.log(tasks);
  });

  function addTask() {
    let newTask = document.getElementById("taskInput").value;
    let newTaskArr = [{ task: newTask, id, done: false }];
    setId(id + 1);
    setTasks(tasks.concat(newTaskArr));
    document.getElementById("taskInput").value = "";
  }

  function updateTask(taskId) {
    let newTask = tasks.map((task) => {
      if (task.id == taskId) {
        task.done = true;
      }
      return task;
    });
    setTasks(newTask);
  }

  return (
    <main>
      <h1>React Hooks</h1>
      <section>
        <div className="form-group">
          <label htmlFor="taskInput">Task:</label>
          <input
            type="text"
            id="taskInput"
            placeholder="To do..."
            className="input-group"
          />
        </div>
        <button className="btn btn-primary" onClick={() => addTask()}>
          Add
        </button>
      </section>
      <hr />
      <section>
        <Overview tasks={tasks} updateTask={updateTask} />
      </section>
    </main>
  );
};

export default App;
