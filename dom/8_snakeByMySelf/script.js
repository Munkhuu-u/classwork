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
  let boxes = document.createElement("div");
  boxes.setAttribute("class", "boxes");
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < weight; j++) {
      let box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", `${i}-${j}`);
      boxes.appendChild(box);
      root.appendChild(boxes);
      ß;
    }
  }
}
renderBoard();

function renderSnake() {
  for (let i = 0; i < snakePos.length; i++) {
    let snakebox = document.getElementById(
      `${snakePos[i][0]}-${snakePos[i][1]}`
    );
    snakebox.classList.add("snake");
  }
}

function moveSnake() {
  let newPos = [];
  switch (direction) {
    case "Right":
      newPos[0] = [snakePos[i][0] + 1, snakePos[i][1]];
      for (let i = 0; i < snakePos.length - 1; i++) {
        newPos[i + 1] = snakePos[i];
      }
      break;
    case "Left":
      newPos[0] = [snakePos[i][0] - 1, snakePos[i][1]];
      for (let i = 0; i < snakePos.length - 1; i++) {
        newPos[i + 1] = snakePos[i];
      }
      break;
    case "Up":
      newPos[0] = [snakePos[i][0], snakePos[i][1] - 1];
      for (let i = 0; i < snakePos.length - 1; i++) {
        newPos[i + 1] = snakePos[i];
      }
      break;
    case "Down":
      newPos[0] = [snakePos[i][0] + 1, snakePos[i][1] + 1];
      for (let i = 0; i < snakePos.length - 1; i++) {
        newPos[i + 1] = snakePos[i];
      }
      break;
  }
  snakePos = newPos;
  console.log(snakePos);
}
