const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const list = document.createElement("li");
  list.className = "todo-list-li";
  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("img");
  button.src = "https://img.icons8.com/ios-glyphs/24/ffffff/multiply.png";
  button.className = "delete-button";
  button.addEventListener("click", deleteTodo);

  todoList.appendChild(list);
  list.appendChild(span);
  list.appendChild(button);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);
