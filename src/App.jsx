import React from "react";
import Overview from "./components/Overview";
import "./App.css";

function App() {
  const [tasks, setTasks] = React.useState([
    {
      task: "Work on app",
      id: 1,
      done: true,
    },
  ]);
  const [id, setId] = React.useState(2);

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

  React.useEffect(() => {
    console.log("App - Effect Hook");
    console.log(tasks);
  });

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
        {tasks.length > 0 ? (
          <ol className="list-group">
            {tasks.map((t, i) => {
              return (
                <React.Fragment key={i + ""}>
                  <Overview task={t} updateTask={updateTask} />
                </React.Fragment>
              );
            })}
          </ol>
        ) : (
          <p>Add a task!</p>
        )}
      </section>
    </main>
  );
}

export default App;
