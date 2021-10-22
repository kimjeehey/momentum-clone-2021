const title = document.querySelector(".title");

function handleTitleClick() {
  title.classList.toggle("clicked");
  // const clickedClass = "clicked";
  // if (title.classList.contains(clickedClass)) {
  //   title.classList.remove(clickedClass);
  // } else {
  //   title.classList.add(clickedClass);
  // }
}

title.addEventListener("click", handleTitleClick);
