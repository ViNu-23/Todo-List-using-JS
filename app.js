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
  const mainDiv = document.createElement("div");
  mainDiv.className = "card-body";
  todoList.appendChild(mainDiv);

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
}

//remove task from task list
// const removeTask = document.querySelector(".task-list");
// removeTask.addEventListener("click", remTask);

// function remTask(e) {
//   const items = e.target;
//   if (items.className === "btn btn-danger") {
//     const todo = items.parentElement;
//     todo.classList.add("fall");
//     todo.addEventListener("transitionend", function () {
//       todo.remove();
//     });
//     //task completed effect
//   }
//   if (items.className === "btn btn-primary") {
//     const todo = items.parentElement;
//     todo.classList.toggle("completed");
//     result = todoInput.value;
//   }

//   e.preventDefault();
// }
