//sequence
//  first apperance, contains 4 card (header, input, add button), whole background image
//  new todo window, contains header = todo name, desc, priority, status
//
//

//cool features
//
//
let root = document.getElementById("root");
let cards = document.createElement("div");
let cardName = ["To do", "In progress", "Stuck", "Done"];

function interface() {
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
    addButt.addEventListener("click", addtodo);

    headerDiv.appendChild(header);
    headerDiv.appendChild(todoCount);
    card.appendChild(headerDiv);
    card.appendChild(todoes);
    card.appendChild(addButt);
    cards.appendChild(card);
    root.appendChild(cards);
  }
}

function addtodo() {
  // todoes in to shown in card
  // bainga baij l baidag window uusgene

  let task = document.createElement("div");
  let title = document.createElement("input");
  let desc = document.createElement("input");
  let status = document.createElement("input");
  let priority = document.createElement("input");

  title.className = "title";
  desc.className = "desc";
  status.className = "status";
  priority.className = "priority";

  title.setAttribute("name", "");
  desc.className = "desc";
  status.className = "status";
  priority.className = "priority";

  task.appendChild(title);
  task.appendChild(desc);
  task.appendChild(status);
  task.appendChild(priority);
  root.appendChild(task);
}

interface();
