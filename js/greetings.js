const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");
const form = document.querySelector(".todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username} 🙌`;
  // greeting.innerText = "Hello, " + username + "🙌"; smae as below
  greeting.classList.remove(HIDDEN_CLASSNAME);
  form.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  form.classList.add(HIDDEN_CLASSNAME);
} else {
  //show the greetings
  paintGreetings(savedUsername);
}

// const now = new.Date();
//   const hr = now.getHours();
//   const morning = "morning,"
//   const afternoon = "afternoon,"
//   const evening = "evening,"

//   if(hr >= 0 && hr < 12){
//     greeting.innerText = `Good ${morning} ${username} 🙌`;
//   }
//   else if(hr >= 12 && hr < 17) {
//     greeting.innerText = `Good ${afternoon} ${username} 🙌`;
//   }
//   else if(hr >= 17 && hr < 24) {
//     greeting.innerText = `Good ${evening} ${username} 🙌`;
//   }
