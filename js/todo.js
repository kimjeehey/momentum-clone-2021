const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");
const addButton = document.createElement("button");
addButton.innerText = "Add";
todoForm.appendChild(addButton);

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodo(newTodo) {
  const list = document.createElement("li");
  list.id = newTodo.id;
  list.className = "todo-list__li";

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("img");
  button.src = "https://img.icons8.com/ios-glyphs/72/ffffff/multiply.png";
  button.className = "delete-button";
  button.addEventListener("click", deleteTodo);

  todoList.appendChild(list);
  list.appendChild(span);
  list.appendChild(button);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  // turning it in to an array
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
  // parsedTodos.forEach((item) => console.log("turn", item));
}
