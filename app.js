const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;

  greeting.classList.remove(HIDDEN_CLASSNAME);
  // greeting.innerText = "Hello, " + username + "🙌"; smae as below
  greeting.innerText = `Hello, ${username} 🙌`;
  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
