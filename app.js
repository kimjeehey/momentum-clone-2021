document.title = "You can change the title from JS";

const title = document.getElementById("title");
// Query selector has to include CSS format
const titleTwo = document.querySelector("#title");
// document.getElementById("title");
title.innerHTML = "yaa!";

const hello = document.getElementsByClassName("hi");
const hi = document.getElementsByTagName("h2");

// bring the first element
const name = document.querySelectorAll("body h2:first-child");
// bring everything
const names = document.querySelector(".text");

console.log(hello);

names.innerText = "Click me!";

// find events start with "on" in console
console.dir(names);

// eventListner
function handleTitleClick() {
  console.log("title was clicked");
  names.innerText = "Yey!";
}

function handleTitleEnter() {
  names.style.color = "orange";
}

function handleTitleLeave() {
  names.style.color = "green";
  names.innerText = "Click me";
}

names.addEventListener("click", handleTitleClick);
names.addEventListener("mouseenter", handleTitleEnter);
names.addEventListener("mouseleave", handleTitleLeave);
