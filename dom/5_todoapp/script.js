let root = document.getElementById("root");
let cards;

function interface() {
  cards = document.createElement("div");
  let cardName = ["To do", "In progress", "Stuck", "Done"];

  for (let i = 0; i < 4; i++) {
    let card = document.createElement("div");
    let headerDiv = document.createElement("div");
    let header = document.createElement("h2");
    let todoCount = document.createElement("p");
    let todoes = document.createElement("div");
    let addButt = document.createElement("button");

    card.className = "card";
    cards.className = "cards";
    headerDiv.className = "cardHeadDiv";
    header.className = "header";
    card.className = "card";
    todoes.className = "todoes";

    header.innerText = `${cardName[i]}`;
    addButt.innerText = "+ Add card";
    addButt.addEventListener("click", makeTaskDivshow);
    headerDiv.appendChild(header);
    headerDiv.appendChild(todoCount);
    card.appendChild(headerDiv);
    card.appendChild(todoes);
    card.appendChild(addButt);
    cards.appendChild(card);
    root.appendChild(cards);
  }
}

let task;
function makeTaskDiv() {
  let classnames = ["title", "desc", "status", "priority"];
  let innerText = ["Title", "Description", "Status", "Priority"];

  task = document.createElement("div");
  task.setAttribute("class", "task");
  let taskTitle = document.createElement("h2");
  taskTitle.innerText = "Add task";
  taskTitle.setAttribute("class", "taskTitle");
  task.appendChild(taskTitle);

  for (let i = 0; i < 4; i++) {
    let input = document.createElement("input");
    let label = document.createElement("label");
    input.id = `${classnames[i]}`;
    label.for = `${classnames[i]}`;
    label.innerText = `${innerText[i]}`;
    task.appendChild(label);
    task.appendChild(input);
  }

  let addTaskButt = document.createElement("button");
  addTaskButt.innerText = "Add task";
  addTaskButt.setAttribute("class", "addTaskButt");

  task.appendChild(addTaskButt);
  root.appendChild(task);
}

function makeTaskDivshow() {
  task.style.display = "flex";
}

function addTaskButtF() {
  //status-aas ni hamaarch ali arra-ruu oroh we gedgiig ni shiidne.
  //card bolgonii todo haragdaj baigaa hesgiig dawtalt ashiglaj shineer zurna.
  //
}

interface();
makeTaskDiv();
