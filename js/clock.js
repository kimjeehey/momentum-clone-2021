const clock = document.querySelector(".clock");
const calendar = document.querySelector(".calendar");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth()).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  calendar.innerText = `${day} · ${month} · ${year}`;
}

getDate();
