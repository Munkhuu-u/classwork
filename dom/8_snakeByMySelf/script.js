const height = 40;
const weight = 40;
let root = document.getElementById("root");
let direction = "Right";
let snakePos = [
  [19, 19],
  [19, 18],
  [19, 17],
  [19, 16],
  [19, 15],
];

function renderBoard() {
  let startButton = document.createElement("button");
  startButton.innerText = "Start";
  startButton.addEventListener("click", startGame);
  root.appendChild(startButton);

  let stopButton = document.createElement("button");
  stopButton.addEventListener("click", stopGame);
  stopButton.innerText = "Stop";
  root.appendChild(stopButton);

  let boxes = document.createElement("div");
  boxes.setAttribute("class", "boxes");
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < weight; j++) {
      let box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", `${i}-${j}`);
      boxes.appendChild(box);
      root.appendChild(boxes);
    }
  }
}
renderBoard();

function renderSnake() {
  for (let i = 0; i < snakePos.length - 1; i++) {
    let snakebox = document.getElementById(
      `${snakePos[i][0]}-${snakePos[i][1]}`
    );
    snakebox.classList.add("snake");
  }
  document
    .getElementById(
      `${snakePos[snakePos.length - 1][0]}-${snakePos[snakePos.length - 1][1]}`
    )
    .classList.remove("snake");
}

let interval;
function startGame() {
  renderSnake();

  interval = setInterval(() => {
    moveSnake();
    renderSnake();
  }, 1000);
}

function stopGame() {
  clearInterval(interval);
}
function moveSnake() {
  let newPos = [];
  switch (direction) {
    case "Right":
      newPos[0] = [snakePos[0][0], snakePos[0][1] + 1];
      for (let i = 0; i < snakePos.length - 1; i++) {
        newPos[i + 1] = snakePos[i];
      }
      break;
    case "Left":
      newPos[0] = [snakePos[0][0], snakePos[0][1] - 1];
      for (let i = 0; i < snakePos.length - 1; i++) {
        newPos[i + 1] = snakePos[i];
      }
      break;
    case "Up":
      newPos[0] = [snakePos[0][0] - 1, snakePos[0][1]];
      for (let i = 0; i < snakePos.length - 1; i++) {
        newPos[i + 1] = snakePos[i];
      }
      break;
    case "Down":
      newPos[0] = [snakePos[0][0] + 1, snakePos[0][1]];
      for (let i = 0; i < snakePos.length - 1; i++) {
        newPos[i + 1] = snakePos[i];
      }
      break;
  }
  snakePos = newPos;
  console.log(snakePos);
}

document.onkeydown = function (e) {
  switch (e.code) {
    case "ArrowUp":
      if (direction != "Down") direction = "Up";
      break;
    case "ArrowDown":
      if (direction != "Up") direction = "Down";
      break;
    case "ArrowRight":
      if (direction != "Left") direction = "Right";
      break;
    case "ArrowLeft":
      if (direction != "Right") direction = "Left";
      break;
  }
};
