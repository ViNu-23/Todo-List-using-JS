# Todo-List-using-JS

# HTML Structure:
Meta Tags: These provide character set information and viewport configuration for better rendering on various devices.
Bootstrap and Custom Stylesheets: You are importing Bootstrap CSS and Bootstrap Icons for styling. The style.css file is also included, but its content is not provided in your code snippet.
Title: Sets the title of the HTML document to "TodoList."
Body: Contains the main content of your application.

# Body Content:
Container: A Bootstrap container class is used to create a responsive fixed-width container.
Heading: h1 tag for the main title "Create your Todo-List."
Form: A form that includes:
Input Group: An input field for users to input their tasks.
Add Button: A button to submit the task.
Filter Dropdown Button: A button to toggle a dropdown menu for filtering tasks.
Dropdown Menu: A Bootstrap dropdown menu with three options: "All," "Completed," and "Uncompleted."
Task List Container: A container to hold the task list, represented by a Bootstrap card.

# JavaScript:
Event Listeners:todoButton.addEventListener("click", addTodo);: Listens for a click on the "Add" button and triggers the addTodo function.

# addTodo Function:
Checks if the input field is empty. If so, it displays an alert.
If not, it calls the addTodo2 function.

# addTodo2 Function:

Creates a new div with the class "card-body" to represent a task.
Appends a paragraph (p) element with the class "card-text" containing the task text.
Creates "Completed" and "Delete" buttons with appropriate Bootstrap styles and appends them to the task.

# Project Summary:
Your project is a simple To-Do List application that allows users to input tasks, mark tasks as completed, and delete tasks. The UI is designed using Bootstrap for styling and responsiveness. JavaScript is used to handle user interactions, dynamically adding tasks to the list, and providing basic validation. The project follows a modular structure, separating the task addition logic into separate functions for better organization.
