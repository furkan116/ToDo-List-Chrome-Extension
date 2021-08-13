const form = document.getElementById("addTodoButton");
const addButton = document.getElementById("addButton");
const addTodoText = document.getElementById("addTodoText");
const todoList = document.getElementById("todoList");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

runExt();

function runExt() {
  form.addEventListener("click", addTodo);
  todoList.addEventListener("click", deleteToDo);
}

function addTodo(e) {
  const newTodo = addTodoText.value.trim();
  addTodoToUI(newTodo);

  e.preventDefault();
}

function addTodoToUI(newTodo) {
    const newListItem = document.createElement("li");
    const newSpanItem = document.createElement("span");
    const newButtonItem = document.createElement("button");
  
    newListItem.className = "todo-list-item";
    newButtonItem.id = "deleteButton";
    newButtonItem.innerHTML = `<i class="fas fa-trash"></i>`;
  
    newSpanItem.appendChild(document.createTextNode(newTodo));
    newListItem.appendChild(newSpanItem);
    newListItem.appendChild(newButtonItem);
  
    todoList.appendChild(newListItem);
}

function deleteToDo(e) {
  if (e.target.className === "fas fa-trash") {
    e.target.parentElement.parentElement.remove();
    //deleteToDoFromStorage(e.target.parentElement.parentElement.textContent)
  }
}

// When the user clicks on the button, open the modal
addButton.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
