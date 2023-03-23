function getTime() {
  const time = document.querySelector(".time");

  const newDate = new Date();

  let hours = String(newDate.getHours()).padStart(2, "2");
  let minutes = String(newDate.getMinutes()).padStart(2, "0");
  let seconds = String(newDate.getSeconds()).padStart(2, "0");

  time.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();

setInterval(() => {
  getTime();
}, 1000);
