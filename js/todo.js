const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");
const addButton = document.createElement("button");
addButton.innerText = "Add";
todoForm.appendChild(addButton);

const TODOS_KEY = "todos";

const toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
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

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function handleTodoAdd(event) {
  event.preventDefault();
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach((item) => console.log("turn", item));
}
