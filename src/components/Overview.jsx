import React, { useEffect, useState } from "react";

function Tasks () {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");
    

    const handleClick = (e) => {
        setText(e.target.value);
        setTasks(tasks => [...tasks, text])
    }
    
    useEffect(() => {
        console.log("App - Effect Hook");
        return function cleanup() {
            console.log("App - Cleanup");
        }
    },[]);

    return (
        <React.Fragment>
            <input 
            type="text"
            placeholder="Enter tasks here:"
            />
            <button onClick={handleClick}>Submit Tasks</button>
        </React.Fragment>
    )
}

export default Tasks;