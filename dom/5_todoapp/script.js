let root = document.getElementById("root");
let cards;

// let receiver = {};
let todoArr = [];
let inprogArr = new Array();
let stuckArr = new Array();
let doneArr = new Array();
let array = [];

function deleteTodo(id) {
  // dark baigaa towchluuriinhaa id-g awna.
  // array-uudaas haina.
  // oldson array bolon index-iinh ni dugaariig awna.
  // olson dugaarluugaa handaad ustgana.
  console.log("delete function ajillaj baina");
  console.log(id);
  if (id.substring(0, 4) == "Todo") {
    console.log(todoArr);
    todoArr = todoArr.filter((e) => {
      return e.id != id;
    });
    console.log(todoArr);
  } else if (id.substring(0, 4) == "Inpr") {
    inprogArr = inprogArr.filter((e) => {
      return e.id != id;
    });
  } else if (id.substring(0, 4) == "Stuc") {
    stuckArr = stuckArr.filter((e) => {
      return e.id != id;
    });
  } else if (id.substring(0, 4) == "Done") {
    doneArr = doneArr.filter((e) => {
      return e.id != id;
    });
  }

  drawtodo();
}

let putindex = -1;
function editTodo(id) {
  let array;
  console.log(id);
  console.log(array);
  if (id.substring(0, 4) == "Todo") {
    array = todoArr;
  } else if (id.substring(0, 4) == "Inpr") {
    array = inprogArr;
  } else if (id.substring(0, 4) == "Stuc") {
    array = stuckArr;
  } else if (id.substring(0, 4) == "Done") {
    array = doneArr;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i].id == id) {
      putindex = i;
    }
  }

  console.log(array);
  console.log(putindex);
  console.log(array[putindex]);
  document.getElementById("title").value = array[Number(putindex)].Title;
  document.getElementById("desc").value = array[Number(putindex)].Description;
  document.getElementById("Status").value = array[Number(putindex)].Status;
  document.getElementById("Priority").value = array[Number(putindex)].Priority;

  makeTaskDivshow();
}

let task;
let classnames;
function drawtodo() {
  //zurdag function

  //todo-g zurj baigaa
  if (selectS.value == "To do") {
    // duplicate this section after array changing bug cleared
    let todoes = document.getElementById("todoes0"); //ali div dotor baigaagaas hamaarch Id ni oorchlogdono
    todoes.className = "todoes";
    todoes.innerHTML = "";
    console.log(todoes);
    console.log("drawtodo ajillaj baina");
    console.log(todoArr);
    for (let i = 0; i < todoArr.length; i++) {
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
      tododelbutt.id = `${todoArr[i].id}`; //change id value with array name
      tododelbutt.addEventListener("click", (e) => {
        let id = e.target.id;
        console.log(e.target);
        deleteTodo(id);
      });

      todoeditbutt.innerText = "Edit";
      todoeditbutt.id = `Todo${i}`; //change id value with array name
      todoeditbutt.addEventListener("click", (e) => {
        let id = e.target.id;
        editTodo(id);
      });

      p1.innerText = todoArr[i].Title;
      p2.innerText = todoArr[i].Description;
      todoPrior.innerText = todoArr[i].Priority;

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
    }
  }

  //In progress-g zurj baigaa
  if (selectS.value == "To do") {
    // duplicate this section after array changing bug cleared
    let todoes = document.getElementById("todoes0"); //ali div dotor baigaagaas hamaarch Id ni oorchlogdono
    todoes.className = "todoes";
    todoes.innerHTML = "";
    console.log(todoes);
    console.log("drawtodo ajillaj baina");
    console.log(todoArr);
    for (let i = 0; i < todoArr.length; i++) {
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
      tododelbutt.id = `${todoArr[i].id}`; //change id value with array name
      tododelbutt.addEventListener("click", (e) => {
        let id = e.target.id;
        console.log(e.target);
        deleteTodo(id);
      });

      todoeditbutt.innerText = "Edit";
      todoeditbutt.id = `Todo${i}`; //change id value with array name
      todoeditbutt.addEventListener("click", (e) => {
        let id = e.target.id;
        editTodo(id);
      });

      p1.innerText = todoArr[i].Title;
      p2.innerText = todoArr[i].Description;
      todoPrior.innerText = todoArr[i].Priority;

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
    }
  }

  //stuck-g zurj baigaa
  if (selectS.value == "To do") {
    // duplicate this section after array changing bug cleared
    let todoes = document.getElementById("todoes0"); //ali div dotor baigaagaas hamaarch Id ni oorchlogdono
    todoes.className = "todoes";
    todoes.innerHTML = "";
    console.log(todoes);
    console.log("drawtodo ajillaj baina");
    console.log(todoArr);
    for (let i = 0; i < todoArr.length; i++) {
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
      tododelbutt.id = `${todoArr[i].id}`; //change id value with array name
      tododelbutt.addEventListener("click", (e) => {
        let id = e.target.id;
        console.log(e.target);
        deleteTodo(id);
      });

      todoeditbutt.innerText = "Edit";
      todoeditbutt.id = `Todo${i}`; //change id value with array name
      todoeditbutt.addEventListener("click", (e) => {
        let id = e.target.id;
        editTodo(id);
      });

      p1.innerText = todoArr[i].Title;
      p2.innerText = todoArr[i].Description;
      todoPrior.innerText = todoArr[i].Priority;

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
    }
  }

  //Done-g zurj baigaa
  if (selectS.value == "To do") {
    // duplicate this section after array changing bug cleared
    let todoes = document.getElementById("todoes0"); //ali div dotor baigaagaas hamaarch Id ni oorchlogdono
    todoes.className = "todoes";
    todoes.innerHTML = "";
    console.log(todoes);
    console.log("drawtodo ajillaj baina");
    console.log(todoArr);
    for (let i = 0; i < todoArr.length; i++) {
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
      tododelbutt.id = `${todoArr[i].id}`; //change id value with array name
      tododelbutt.addEventListener("click", (e) => {
        let id = e.target.id;
        console.log(e.target);
        deleteTodo(id);
      });

      todoeditbutt.innerText = "Edit";
      todoeditbutt.id = `Todo${i}`; //change id value with array name
      todoeditbutt.addEventListener("click", (e) => {
        let id = e.target.id;
        editTodo(id);
      });

      p1.innerText = todoArr[i].Title;
      p2.innerText = todoArr[i].Description;
      todoPrior.innerText = todoArr[i].Priority;

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
    }
  }
  document.getElementById(classnames[0]).value = "";
  document.getElementById(classnames[1]).value = "";
  task.style.display = "none";
}

let selectS;
let selectP;
function addTaskButtF() {
  //here assign value to receiver
  let receiver = {};
  console.log(putindex);
  console.log(putindex == "");
  console.log(putindex != -1);
  if (putindex == -1) {
    receiver.Title = document.getElementById(classnames[0]).value;
    receiver.Description = document.getElementById(classnames[1]).value;
    receiver.Status = selectS.value;
    receiver.Priority = selectP.value;

    if (selectS.value == "To do") {
      receiver.id = `Todo${todoArr.length}`;
      todoArr.push(receiver);
    } else if (selectS.value == "In progress") {
      receiver.id = `Inpr${inprogArr.length}`;
      inprogArr.push(receiver);
    } else if (selectS.value == "Stuck") {
      receiver.id = `Stuc${stuck.length}`;
      stuckArr.push(receiver);
    } else if (selectS.value == "Done") {
      receiver.id = `Done${doneArr.length}`;
      doneArr.push(receiver);
    }
  } else if (putindex >= 0) {
    receiver.Title = document.getElementById(classnames[0]).value;
    receiver.Description = document.getElementById(classnames[1]).value;
    receiver.Status = selectS.value;
    receiver.Priority = selectP.value;

    if (selectS.value == "To do") {
      receiver.id = `Todo${putindex}`;
      todoArr.splice(putindex, 1, receiver);
    } else if (selectS.value == "In progress") {
      receiver.id = `Inpr${putindex}`;
      inprogArr.splice(putindex, 1, receiver);
    } else if (selectS.value == "Stuck") {
      receiver.id = `Stuc${putindex}`;
      stuckArr.splice(putindex, 1, receiver);
    } else if (selectS.value == "Done") {
      receiver.id = `Done${putindex}`;
      doneArr.splice(putindex, 1, receiver);
    }
    putindex = -1;
    console.log(todoArr);
    console.log(putindex);
    console.log(todoArr[putindex]);
  }

  drawtodo();
}

function makeTaskDivshow() {
  // show when push add card button
  task.style.display = "flex";
}

function makeTaskDiv(title, description, status, priotity) {
  //drawing task card view
  console.log("makeTaskDiv ajillaj baina");
  classnames = ["title", "desc", "status", "priority"];
  let innerText = ["Title", "Description", "Status", "Priority"];

  task = document.createElement("div");
  task.setAttribute("class", "task");
  let taskTitle = document.createElement("h2");
  taskTitle.innerText = "Add task";
  taskTitle.setAttribute("class", "taskTitle");
  task.appendChild(taskTitle);

  let input0;
  let label0;

  input0 = document.createElement("input");
  label0 = document.createElement("label");
  input0.id = `${classnames[0]}`;
  label0.for = `${classnames[0]}`;
  label0.innerText = `${innerText[0]}`;
  task.appendChild(label0);
  task.appendChild(input0);
  input0.innerText = `${title}`;

  let input1;
  let label1;

  input1 = document.createElement("input");
  label1 = document.createElement("label");
  input1.id = `${classnames[1]}`;
  label1.for = `${classnames[1]}`;
  label1.innerText = `${innerText[1]}`;
  task.appendChild(label1);
  task.appendChild(input1);
  input1.innerText = `${description}`;

  // let input = document.createElement("input");
  let label2 = document.createElement("label");

  //STATUS SELECTOR
  label2.for = `${classnames[2]}`;
  label2.innerText = `${innerText[2]}`;
  selectS = document.createElement("select");
  selectS.setAttribute("name", `${innerText[2]}`);
  selectS.setAttribute("id", `${innerText[2]}`);
  selectS.innerText = `${status}`;

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

  task.appendChild(label2);
  selectS.appendChild(opt1);
  selectS.appendChild(opt2);
  selectS.appendChild(opt3);
  selectS.appendChild(opt4);
  task.appendChild(selectS);

  ///PRIOTITY SELECTOR

  let label3 = document.createElement("label");
  label3.for = `${classnames[3]}`;
  label3.innerText = `${innerText[3]}`;
  selectP = document.createElement("select");
  selectP.setAttribute("name", `${innerText[3]}`);
  selectP.setAttribute("id", `${innerText[3]}`);
  selectP.innerText = `${priotity}`;

  let opt5 = document.createElement("option");
  let opt6 = document.createElement("option");
  let opt7 = document.createElement("option");

  opt5.setAttribute("value", "High");
  opt6.setAttribute("value", "Medium");
  opt7.setAttribute("value", "Low");

  opt5.innerText = "High";
  opt6.innerText = "Medium";
  opt7.innerText = "Low";

  task.appendChild(label3);
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
makeTaskDiv("", "", "", "");
drawtodo();
