const todoInput = document.querySelector("#task-input");
const todoButton = document.querySelector("#task-submit");
const todoList = document.querySelector(".task-list");

todoButton.addEventListener("click", addTodo);


function addTodo(e) {
  if((todoInput.value)==0){
    alert('Enter Task')
  }else{
    addTodo2(e)
  }
}

function addTodo2(e) {
  //created li list
 
  const divList = document.createElement("div");
  divList.className = "input-group input-group-lg";
  


  const todoLi = document.createElement("li");
  todoLi.className = " list-group-item";
  todoLi.appendChild(document.createTextNode(todoInput.value));
  todoLi.value = "";
  divList.appendChild(todoLi);

  //creating task-complete button
  const completeBtn = document.createElement("button");
  completeBtn.className = "btn btn-primary";
  completeBtn.innerHTML = `Completed`;
  divList.appendChild(completeBtn);

  //creating task-remove button
  const trashBtn = document.createElement("button");
  trashBtn.className = "btn btn-danger";
  trashBtn.innerHTML = `Delete`;
  divList.appendChild(trashBtn);

  
  todoList.appendChild(divList);
  e.preventDefault();
}

//remove task from task list
const removeTask = document.querySelector(".task-list");
removeTask.addEventListener("click", remTask);

function remTask(e) {
  const items = e.target;
  if (items.className === "btn btn-danger") {
    const todo = items.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
    //task completed effect
  }
  if (items.className === "btn btn-primary") {
    const todo = items.parentElement;
    todo.classList.toggle("completed");
    result = todoInput.value;
  }

  e.preventDefault();
}
