# React Hooks

## Getting Started

- Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
- Use this template repository to start a new project in your repos folder: git clone <repo_name>
  cd repo_name to navigate into your new repo directory
- Make sure to run `npm install` to fetch the dependencies for the project
- Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
- Follow the instructions on the README.md file to complete exercises
- Open the src folder to get started

## Exercise

### Overview

- Our application will be made of two components, App and Overview.
- Your application should render an input field and a submit button.
- With the submit button, you can add the content from your input to a “tasks array” that is managed in a state hook.
- Finally, for each task in the tasks array, an HTML list element should be rendered.

### Steps

1. Create a components folder in your src directory and create a file for your component called `Overview.js`. `Overview.jsx` should just render our tasks, while `App.jsx` is going to handle the input field with the logic and the tasks state array.

   - In `Overview.jsx`, import React and create a functional component named Overview
   - Overview will take in props with `tasks`, `handleTaskDoneToggle`, and `handleResetTaskList`
   - And will return jsx displaying `tasks` as a list

   ```
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
   ```

   - Also import a Task component that we will create next, that will display each task in our list
   - Create a new file named `Task.jsx` in the components folder
   - Task will take in props with `index`, `content`, `done`, and `handleTaskDoneToggle`
   - And will return jsx displaying each `task` from our list

   ```
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
   ```

2. With the intended functionality explained, it’s your turn to implement this React app (again). You can do it.

    - Our `Overview.jsx` and `Task.jsx` components are functional components that return jsx, but they do not handle the action or state of our application.
    - Let's focus on our `App.jsx` to finish the functionality
    - Make sure that you have **react**, **Overview**, and your **App.css** files imported
    - Strip the class component bare and convert it to a functional component so that we may use hooks

    ```
    const App = () => {
        return (
            ...
        );
    };

    export default App;
    ```

    

3. After you get the functionality working, style the app. Practice, practice, practice.

- REMEMBER: Use the JavaScript function `map` to map over your tasks array. You will need to provide a `unique key` to each item (read the warning, you’ll know it when you see it in the console!). And there is a difference between handling input fields in plain JavaScript and in React. Give a whirl and stretch yourself, but fear not, we will again provide an overview of our solution below.

### BONUS

- Add a feature to be able to check off completed tasks
- Add colors (or indicator of choice) for priority status
