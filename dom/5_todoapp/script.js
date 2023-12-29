let root = document.getElementById("root");
let cards;

let receiver = {};
let todoArr = new Array();
let inprogArr = new Array();
let stuckArr = new Array();
let doneArr = new Array();

let task;
let classnames;
function todoesF() {
  console.log("consoling from todoesF selectP:", selectP);
  console.log("consoling from todoesF selectS:", selectS);
  console.log("consoling from todoesF receiver:", receiver);
  console.log("consoling from todoesF todoArr:", todoArr);

  if (todoArr != "" && selectS.value == "To do") {
    let todoes = document.getElementById("todoes0"); //ali div dotor baigaagaas hamaarch Id ni oorchlogdono
    todoes.innerHTML = "";
    console.log("todoArr: ", todoArr);
    todoArr.map((e) => {
      let todo = document.createElement("div");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p4 = document.createElement("p");

      p1.innerText = e.Title;
      p2.innerText = e.Description;
      p4.innerText = e.Priority;

      todo.appendChild(p1);
      todo.appendChild(p2);
      todo.appendChild(p4);

      todoes.appendChild(todo);
    });
  }

  document.getElementById(classnames[0]).value = "";
  document.getElementById(classnames[1]).value = "";
  task.style.display = "none";
}

let selectS;
let selectP;
function addTaskButtF() {
  // console.log("receiver before assign new values", receiver);
  // receiver = "";
  console.log(
    "document.getElementById(classnames[0]).value:",
    document.getElementById(classnames[0]).value
  );
  receiver.Title = document.getElementById(classnames[0]).value;
  // console.log("receiver.Title", receiver.Title);
  receiver.Description = document.getElementById(classnames[1]).value;
  receiver.Status = selectS.value;
  receiver.Priority = selectP.value;
  console.log("receiver after assign new values receiver:", receiver);

  if (selectS.value == "To do") {
    console.log("consoling from addTaskButtf receiver:", receiver);
    console.log(
      "consoling from addTaskButtf before push value todoArr:",
      todoArr
    );
    todoArr.push(receiver);
    console.log("consoling from addTaskButtF todoArr:", todoArr);
  } else if (selectS.value == "In progress") {
    inprogArr.push(receiver);
  } else if (selectS.value == "Stuck") {
    stuckArr.push(receiver);
  } else if (selectS.value == "Done") {
    doneArr.push(receiver);
  }

  todoesF();
}

function makeTaskDivshow() {
  task.style.display = "flex";
  console.log("todoArr:", todoArr);
}

function makeTaskDiv() {
  classnames = ["title", "desc", "status", "priority"];
  let innerText = ["Title", "Description", "Status", "Priority"];

  task = document.createElement("div");
  task.setAttribute("class", "task");
  let taskTitle = document.createElement("h2");
  taskTitle.innerText = "Add task";
  taskTitle.setAttribute("class", "taskTitle");
  task.appendChild(taskTitle);

  for (let i = 0; i < 2; i++) {
    let input = document.createElement("input");
    let label = document.createElement("label");
    input.id = `${classnames[i]}`;
    label.for = `${classnames[i]}`;
    label.innerText = `${innerText[i]}`;
    task.appendChild(label);
    task.appendChild(input);
  }
  // let input = document.createElement("input");
  let label1 = document.createElement("label");

  //STATUS SELECTOR
  label1.for = `${classnames[2]}`;
  label1.innerText = `${innerText[2]}`;
  selectS = document.createElement("select");
  selectS.setAttribute("name", `${innerText[2]}`);
  selectS.setAttribute("id", `${innerText[2]}`);

  let opt1 = document.createElement("option");
  let opt2 = document.createElement("option");
  let opt3 = document.createElement("option");
  let opt4 = document.createElement("option");

  opt1.setAttribute("value", "To do");
  opt2.setAttribute("value", "In progress");
  opt3.setAttribute("value", "Stuck");
  opt4.setAttribute("value", "Done");

  opt1.innerText = "To do";
  opt2.innerText = "In progress";
  opt3.innerText = "Stuck";
  opt4.innerText = "Done";

  task.appendChild(label1);
  selectS.appendChild(opt1);
  selectS.appendChild(opt2);
  selectS.appendChild(opt3);
  selectS.appendChild(opt4);
  task.appendChild(selectS);

  ///PRIOTITY SELECTOR

  let label2 = document.createElement("label");
  label2.for = `${classnames[3]}`;
  label2.innerText = `${innerText[3]}`;
  selectP = document.createElement("select");
  selectP.setAttribute("name", `${innerText[2]}`);
  selectP.setAttribute("id", `${innerText[2]}`);

  let opt5 = document.createElement("option");
  let opt6 = document.createElement("option");
  let opt7 = document.createElement("option");

  opt5.setAttribute("value", "High");
  opt6.setAttribute("value", "Medium");
  opt7.setAttribute("value", "Low");

  opt5.innerText = "High";
  opt6.innerText = "Medium";
  opt7.innerText = "Low";

  task.appendChild(label2);
  selectP.appendChild(opt5);
  selectP.appendChild(opt6);
  selectP.appendChild(opt7);
  task.appendChild(selectP);

  // task.appendChild(selectP);

  let addTaskButt = document.createElement("button");
  addTaskButt.innerText = "Add task";
  addTaskButt.setAttribute("class", "addTaskButt");
  addTaskButt.addEventListener("click", addTaskButtF);

  task.appendChild(addTaskButt);
  root.appendChild(task);
}

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
    todoes.id = `todoes${i}`;

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

interface();
makeTaskDiv();

//1 torliin status deer 2 tood assign hiihed suuliin assign hiisenteigee adilhan bolchood baina.
