function logSubmit(event) {
  log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
  console.log("log.textContent", log.textContent);
  console.log(`Form Submitted! Timestamp: ${event.timeStamp}`);
  event.preventDefault();
  console.log("event.preventDefault(): ", event.preventDefault());
}

const form = document.getElementById("form");
const log = document.getElementById("log");

form.addEventListener("submit", logSubmit);
