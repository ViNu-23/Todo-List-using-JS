const todoInput = document.querySelector("#task-input");
const todoButton = document.querySelector("#task-submit");
const todoList = document.querySelector(".task-list");

todoButton.addEventListener("click", addTodo);

function addTodo(e) {
  //created li list
  // alert("new task added");

  const todoLi = document.createElement("li");
  todoLi.className = "todos";
  todoLi.appendChild(document.createTextNode(todoInput.value));
  todoLi.value = "";

  //creating task-complete button
  const completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.innerHTML = "C";
  todoLi.appendChild(completeBtn);

  //creating task-remove button
  const trashBtn = document.createElement("button");
  trashBtn.className = "remove-btn";
  trashBtn.innerHTML = "X";
  todoLi.appendChild(trashBtn);
  todoList.appendChild(todoLi);
  e.preventDefault();
}

//remove task from task list
const removeTask = document.querySelector(".task-list");
removeTask.addEventListener("click", remTask);

function remTask(e) {
  const items = e.target;
  if (items.className === "remove-btn") {
    // alert("Task removed");
    const todo = items.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
    //task completed effect
  }
  if (items.className === "complete-btn") {
    const todo = items.parentElement;
    todo.classList.toggle("completed");
    result = todoInput.value;
    // alert(`Great u completed ${result}`);
  }

  e.preventDefault();
}
