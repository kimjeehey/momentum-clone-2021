const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

function paintTodo(newTodo) {
  const list = document.createElement("li");
  const span = document.createElement("span");

  todoList.appendChild(list);
  list.appendChild(span);
  span.innerText = newTodo;
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);
