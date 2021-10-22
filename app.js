const title = document.querySelector(".title");

// function handleTitleClick() {
//   const currentColor = title.style.color;
//   let newColor;

//   if (currentColor === "blue") {
//     newColor = "green";
//   } else {
//     newColor = "blue";
//   }
//   title.style.color = newColor;
// } 동일하게 작동하는 코드 아래에.

function handleTitleClick() {
  const clickedClass = "clicked";
  // title.className = "active";
  if (title.classList.contains(clickedClass)) {
    title.classList.remove(clickedClass);
  } else {
    title.classList.add(clickedClass);
  }
}

title.addEventListener("click", handleTitleClick);
