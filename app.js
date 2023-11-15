const todoInput = document.querySelector("#task-input");
const todoButton = document.querySelector("#task-submit");
const todoList = document.querySelector(".card");

todoButton.addEventListener("click", addTodo);

//null validation
function addTodo(e) {
  if (todoInput.value == 0) {
    alert("Enter Task");
  } else {
    goodToGo(e);
  }
}

function goodToGo(e) {
  //parent div have paragraph and button
  const mainDiv = document.createElement("div");
  mainDiv.className = "card-body";
  todoList.appendChild(mainDiv);

  //creating paragraph tag to append list text
  const paraElement = document.createElement("p");
  paraElement.className = "card-text";
  paraElement.appendChild(document.createTextNode(todoInput.value));
  paraElement.value = "";
  mainDiv.appendChild(paraElement);

  //task complete button rendering
  const completeBtn = document.createElement("button");
  completeBtn.className = "btn btn-primary";
  completeBtn.innerHTML = `Completed`;
  mainDiv.appendChild(completeBtn);

  //task remove button rendering
  const trashBtn = document.createElement("button");
  trashBtn.className = "btn btn-danger";
  trashBtn.innerHTML = `Delete`;
  mainDiv.appendChild(trashBtn);

  e.preventDefault();
  //making input value null so previous task will be no more
  todoInput.value = null;
}

// remove task from task list
const removeTask = document.querySelector(".card");
removeTask.addEventListener("click", remTask);

//getting buttons by parents div to do add action
function remTask(e) {
  const items = e.target;

  //remove task function and effect
  if (items.className === "btn btn-danger") {
    const todo = items.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //task completed function and effect
  if (items.className === "btn btn-primary") {
    const todo = items.parentElement;
    todo.classList.toggle("completed");
    result = todoInput.value;
  }

  e.preventDefault();
}
