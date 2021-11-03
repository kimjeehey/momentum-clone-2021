// const images = ["01.jpeg", "02.jpeg", "03.jpeg"];
const images = [
  "https://images.unsplash.com/photo-1581673001335-f7ba9606c8b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU4fHxmaWxtJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1566544054569-951d1512c66c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgzfHxmaWxtJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1626212701109-12fd94ddb7f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxmaWxtJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

const bgImageOverlay = document.createElement("div");
bgImageOverlay.className = "bg-overlay";

bgImage.src = `${chosenImage}`;

document.body.appendChild(bgImage);
document.body.appendChild(bgImageOverlay);
