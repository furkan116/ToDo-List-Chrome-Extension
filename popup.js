const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

runExt();

function runExt() {
    addButton.addEventListener("click", addTodo);
    todoList.addEventListener("click", deleteToDo)
}

function addTodo() {
    alert("Alert");
}

function deleteToDo(e) {
    if(e.target.className === "fas fa-trash") {
        e.target.parentElement.parentElement.remove();
        //deleteToDoFromStorage(e.target.parentElement.parentElement.textContent)
    }
}