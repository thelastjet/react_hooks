# React Hooks

## Getting Started

- Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
- Use this template repository to start a new project in your repos folder: git clone <repo_name>
  cd repo_name to navigate into your new repo directory
- Make sure to run `npm install` to fetch the dependencies for the project
- Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
- Follow the instructions on the README.md file to complete exercises
- Open the app.js file to get started

## Exercise

### Overview

- Our application will be made of two components, App and Overview.
- Your application should render an input field and a submit button.
- With the submit button, you can add the content from your input to a “tasks array” that is managed in a state hook.
- Finally, for each task in the tasks array, an HTML list element should be rendered.

1. Create a components folder in your src directory and create a file for your component called `Overview.js`. `Overview.js` should just render our tasks, while `App.js` is going to handle the input field with the logic.
2. With the intended functionality explained, it’s your turn to implement this React app (again). You can do it.
3. After you get the functionality working, style the app. Practice, practice, practice.

- REMEMBER: Use the JavaScript function `map` to map over your tasks array. You will need to provide a `unique key` to each item (read the warning, you’ll know it when you see it in the console!). And there is a difference between handling input fields in plain JavaScript and in React. Give a whirl and stretch yourself, but fear not, we will again provide an overview of our solution below.

## BONUS

- Add a feature to be able to check off completed tasks
- Add colors (or indicator of choice) for priority status
