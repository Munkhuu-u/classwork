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
  //zurdag function
  if (todoArr != "" && selectS.value == "To do") {
    // duplicate this section after array changing bug cleared
    let todoes = document.getElementById("todoes0"); //ali div dotor baigaagaas hamaarch Id ni oorchlogdono
    todoes.className = "todoes";
    todoes.innerHTML = "";
    todoArr.map((e) => {
      let todo = document.createElement("div");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");

      todo.setAttribute("class", "todo");

      //todoes appearance code commence
      let todoCheck = document.createElement("input");
      let todoRight = document.createElement("div");
      let todoHeader = document.createElement("div");
      let todoDesc = document.createElement("div");
      let todoPrior = document.createElement("p");
      let tododelbutt = document.createElement("button");
      let todoeditbutt = document.createElement("button");

      tododelbutt.className = "todoDel";
      todoeditbutt.className = "todoDel";
      todoRight.className = "todoRight";
      todoCheck.className = "todoCheck";
      todoHeader.className = "todoRow";
      todoDesc.className = "todoRow";
      todoPrior.className = "todoRow";
      todoCheck.type = "radio";

      tododelbutt.innerText = "Delete";
      todoeditbutt.innerText = "Edit";
      p1.innerText = e.Title;
      p2.innerText = e.Description;
      todoPrior.innerText = e.Priority;

      todoHeader.appendChild(p1);
      todoHeader.appendChild(tododelbutt);
      todoDesc.appendChild(p2);
      todoDesc.appendChild(todoeditbutt);
      todoRight.appendChild(todoHeader);
      todoRight.appendChild(todoDesc);
      todoRight.appendChild(todoPrior);

      todo.appendChild(todoCheck);
      todo.appendChild(todoRight);
      //todoes appearance code completion

      todoes.appendChild(todo);
    });
  }

  document.getElementById(classnames[0]).value = "";
  document.getElementById(classnames[1]).value = "";
  task.style.display = "none";
}

let selectS;
let selectP;

function arrangeToArr() {
  //zow array-ruu ni angildag F
  if (selectS.value == "To do") {
    receiver.id = `Todo${todoArr.length}`;
    todoArr.push(receiver);
  } else if (selectS.value == "In progress") {
    receiver.id = `Inprogress${inprogArr.length}`;
    inprogArr.push(receiver);
  } else if (selectS.value == "Stuck") {
    receiver.id = `stuck${stuck.length}`;
    stuckArr.push(receiver);
  } else if (selectS.value == "Done") {
    receiver.id = `stuck${doneArr.length}`;
    doneArr.push(receiver);
  }
}

function addTaskButtF() {
  //here assign value to receiver
  receiver.Title = document.getElementById(classnames[0]).value;
  receiver.Description = document.getElementById(classnames[1]).value;
  receiver.Status = selectS.value;
  receiver.Priority = selectP.value;
  console.log(
    "When push task button, receiver object:",
    receiver,
    typeof receiver
  );
  console.log("When push task button, Todo Array:", todoArr, typeof todoArr);
  arrangeToArr();
  todoesF();
}

function makeTaskDivshow() {
  // show when push add card button
  task.style.display = "flex";
}

function makeTaskDiv() {
  //drawing task card view
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
  //drawing interface
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
    addButt.className = "addButt";
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
