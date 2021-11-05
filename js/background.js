// const images = ["01.jpeg", "02.jpeg", "03.jpeg"];
const images = [
  "https://images.unsplash.com/photo-1597080371188-f699b5639f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGZpbG0lMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1566544054569-951d1512c66c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgzfHxmaWxtJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1626212701109-12fd94ddb7f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxmaWxtJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1570081724200-f37eba0ac80c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNjA1Njc5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1600264094337-4acec0445570?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZpbG0lMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1603118258727-c20d28b28bea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc3fHxmaWxtJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1596836530514-3b80da244256?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzIzfHxmaWxtJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1622605105900-52625dfd1be9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1562859771-995cb5a2ce12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1736&q=80",
  "https://images.unsplash.com/photo-1463595663992-cb0dc1d6403f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1780&q=80",
  "https://images.unsplash.com/photo-1597152687310-7aaeca156cf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1624&q=80",
  "https://images.unsplash.com/photo-1634906115299-2e80ebf65d8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=808&q=80",
  "https://images.unsplash.com/photo-1550064591-15ca87b174e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1726&q=80",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

const bgImageOverlay = document.createElement("div");
bgImageOverlay.className = "bg-overlay";

bgImage.src = `${chosenImage}`;

document.body.appendChild(bgImage);
document.body.appendChild(bgImageOverlay);
