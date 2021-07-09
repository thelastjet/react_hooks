import React from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = React.useState([]);
  const [input, setInput] = React.useState("");
  

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    let input = document.querySelector("#input").value;
    let newList = [...tasks, input];
    setTasks(newList);
  }
  console.log(tasks);
    
  React.useEffect(() => {
    console.log("App - Effect Hook");
    return function cleanup() {
        console.log("App - Cleanup");
    }
  },[]);

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1>My To Do List</h1>  
      <form action="">
        <label htmlFor="input">Enter task here:</label>
        <input 
          type="text"
          name="input"
          id="input"
          placeholder="Enter tasks here:"
        />
        <button onClick={handleClick}>Add Task to List</button>
      </form>
      <ul>
        {tasks.map((input, idx) => (
          <li key={idx}>{input}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
