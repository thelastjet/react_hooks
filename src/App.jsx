import React from "react";
import "./App.css";
import Overview from "./components/Overview";

const App = () => {
  const [tasks, setTasks] = React.useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    let input = document.querySelector("#input").value;
    let newTaskList = [...tasks, input];
    setTasks(newTaskList);
  }

  console.log(tasks);

  let todoListImage = require('./images/todolist.jpg')
    
  React.useEffect(() => {
    console.log("App - Effect Hook");
    return function cleanup() {
        console.log("App - Cleanup");
    }
  },[]);

  return (
    <main>
      <h1>To Do List</h1>
      <hr />
      <form action="">
        <input 
          type="text"
          name="input"
          id="input"
          placeholder="Enter task here"
          autoFocus
        />
        <button onClick={handleClick}>Add Task to List</button>
      </form>
      <hr />
      <div className="parent-container">
        <div className="child">
          <img src={todoListImage.default} />
        </div>
        <div className="child">
          <Overview tasks={tasks}/>
        </div>
      </div> 
    </main>
  );
}

export default App;
