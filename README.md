# Responsive Todo List application using HTML, CSS, and JavaScript.

<img width="224" alt="Screenshot 2023-11-16 200151" src="https://github.com/ViNu-23/Todo-List-using-JS/assets/59360964/1881f2df-b680-4c92-93f5-9ff593266e32">
<img width="221" alt="Screenshot 2023-11-16 195647" src="https://github.com/ViNu-23/Todo-List-using-JS/assets/59360964/c4c3e08e-abb6-4830-8a97-d0205500c951">
<img width="220" alt="Screenshot 2023-11-16 195724" src="https://github.com/ViNu-23/Todo-List-using-JS/assets/59360964/420b4710-4c83-400a-abb1-112f792377ea">
<img width="955" alt="Screenshot 2023-11-16 195848" src="https://github.com/ViNu-23/Todo-List-using-JS/assets/59360964/247773e5-e07e-4e8e-9c21-793b320e9e6f">

## Features

- Add tasks to your todo list.
- Mark tasks as completed.
- Remove tasks from the list.
- Filter tasks based on completion status (All, Completed, Uncompleted).
- Data persistence using local storage.


1. **HTML Structure:**
   - The HTML structure defines a simple Todo List application. It includes input fields for adding tasks, buttons for submitting tasks, filtering tasks, and a container for displaying tasks.

2. **JavaScript Logic:**
   - The JavaScript code is responsible for the dynamic behavior of the Todo List application.

3. **Event Listeners:**
   - `todoAll`, `todoCompleted`, and `todoUncompleted` are buttons for filtering tasks based on their completion status.
   - `todoButton` is the button for adding a new task.
   - `document.addEventListener("DOMContentLoaded", function (e) {...}` ensures that the page's content is fully loaded before executing the specified function, in this case, `getTodo()`.

4. **Add Todo Functionality (`addTodo` and `goodToGo`):**
   - The `addTodo` function is triggered when the "Add Todo" button (`todoButton`) is clicked. It checks if the input field (`todoInput`) is empty and shows an alert if it is. Otherwise, it calls the `goodToGo` function.
   - The `goodToGo` function creates a new task element (a `div` with class `card-body`) containing a paragraph (`p`) for the task text, a "Completed" button, and a "Delete" button. It also calls the `setTodo` function to save the task to local storage.

5. **Remove Todo Functionality (`remTask`):**
   - The `remTask` function is triggered when a button inside the task is clicked. It checks if the clicked button has the class "btn-danger" (Delete button) or "btn-primary" (Completed button).
   - If the button is a delete button, it adds a CSS class for a falling animation (`fall`), removes the task from local storage (`removeLocal`), and then removes the task from the DOM.
   - If the button is a Completed button, it toggles the "task-completed" class on the parent task element.

6. **Filtering Functionality (`filterAll`, `filterCompleted`, `filterUncompleted`):**
   - These functions are triggered when the corresponding filter buttons are clicked.
   - `filterAll` shows all tasks by setting the display property to "flex" for all task elements.
   - `filterCompleted` shows only completed tasks by hiding tasks without the "task-completed" class.
   - `filterUncompleted` shows only uncompleted tasks by hiding tasks with the "task-completed" class.

7. **LocalStorage Functions (`setTodo`, `getTodo`, `removeLocal`):**
   - `setTodo` stores a new task in local storage.
   - `getTodo` retrieves tasks from local storage on page load and renders them in the DOM.
   - `removeLocal` removes a task from local storage based on the task's text content.

Overall, this code creates a simple Todo List application with functionality for adding, removing, and filtering tasks, and it persists tasks in the browser's local storage.