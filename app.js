const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(event) {
  const username = loginInput.value;
  event.preventDefault();
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
