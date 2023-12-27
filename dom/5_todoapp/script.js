let root = document.getElementById("root");
let cards;

let receiver = new Object({});
let todoArr = new Array([]);
let inprogArr = new Array([]);
let stuckArr = new Array([]);
let doneArr = new Array([]);
// console.log({ receiver });

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

let task;
let classnames;
function makeTaskDiv() {
  classnames = ["title", "desc", "status", "priority"];
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
  addTaskButt.addEventListener("click", addTaskButtF);

  task.appendChild(addTaskButt);
  root.appendChild(task);
}

function makeTaskDivshow() {
  task.style.display = "flex";
}

function todoesF() {
  if (todoArr != "" && todoArr[0].Status == "todo") {
    todoArr.map((e) => {
      console.log("todoesF dotroos hewlew todoArr:", todoArr);
      console.log(
        "todoesF dotroos hewlew todoArr.Title:",
        todoArr[todoArr.length - 1].Title
      );
      console.log(todoArr.Description);
      console.log(todoArr.Status);
      console.log(todoArr.Priority);
      let todo = document.createElement("div");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");

      p1.innerText = `${todoArr[todoArr.length - 1].Title}`;
      p2.innerText = `${todoArr[todoArr.length - 1].Description}`;
      p3.innerText = `${todoArr[todoArr.length - 1].Status}`;
      p4.innerText = `${todoArr[todoArr.length - 1].Priority}`;

      todo.appendChild(p1);
      todo.appendChild(p2);
      todo.appendChild(p3);
      todo.appendChild(p4);

      console.log({ p1 });
      console.log({ p2 });
      console.log({ p3 });
      console.log({ p4 });
      let todoes = document.getElementById("todoes0");
      todoes.appendChild(todo);
    });
  }

  if (inprogArr != "" && todoArr[0].Status == "in progress") {
    inprogArr.map((e) => {
      console.log("todoesF dotroos hewlew inprogArr:", inprogArr);
      console.log(
        "todoesF dotroos hewlew inprogArr.Title:",
        inprogArr[inprogArr.length - 1].Title
      );
      console.log(inprogArr.Description);
      console.log(inprogArr.Status);
      console.log(inprogArr.Priority);
      let todo = document.createElement("div");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");

      p1.innerText = `${inprogArr[inprogArr.length - 1].Title}`;
      p2.innerText = `${inprogArr[inprogArr.length - 1].Description}`;
      p3.innerText = `${inprogArr[inprogArr.length - 1].Status}`;
      p4.innerText = `${inprogArr[inprogArr.length - 1].Priority}`;

      todo.appendChild(p1);
      todo.appendChild(p2);
      todo.appendChild(p3);
      todo.appendChild(p4);

      console.log({ p1 });
      console.log({ p2 });
      console.log({ p3 });
      console.log({ p4 });

      let todoes = document.getElementById("todoes1");
      todoes.appendChild(todo);
    });
  }

  if (stuckArr != "" && todoArr[0].Status == "stuck") {
    stuckArr.map((e) => {
      console.log("todoesF dotroos hewlew stuckArr:", stuckArr);
      console.log(
        "todoesF dotroos hewlew stuckArr.Title:",
        stuckArr[stuckArr.length - 1].Title
      );
      console.log(stuckArr.Description);
      console.log(stuckArr.Status);
      console.log(stuckArr.Priority);
      let todo = document.createElement("div");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");

      p1.innerText = `${stuckArr[stuckArr.length - 1].Title}`;
      p2.innerText = `${stuckArr[stuckArr.length - 1].Description}`;
      p3.innerText = `${stuckArr[stuckArr.length - 1].Status}`;
      p4.innerText = `${stuckArr[stuckArr.length - 1].Priority}`;

      todo.appendChild(p1);
      todo.appendChild(p2);
      todo.appendChild(p3);
      todo.appendChild(p4);

      console.log({ p1 });
      console.log({ p2 });
      console.log({ p3 });
      console.log({ p4 });

      let todoes = document.getElementById("todoes2");
      todoes.appendChild(todo);
    });
  }

  if (doneArr != "" && todoArr[0].Status == "done") {
    doneArr.map((e) => {
      console.log("todoesF dotroos hewlew doneArr:", doneArr);
      console.log(
        "todoesF dotroos hewlew doneArr.Title:",
        doneArr[doneArr.length - 1].Title
      );
      console.log(doneArr.Description);
      console.log(doneArr.Status);
      console.log(doneArr.Priority);
      let todo = document.createElement("div");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");

      p1.innerText = `${doneArr[doneArr.length - 1].Title}`;
      p2.innerText = `${doneArr[doneArr.length - 1].Description}`;
      p3.innerText = `${doneArr[doneArr.length - 1].Status}`;
      p4.innerText = `${doneArr[doneArr.length - 1].Priority}`;

      todo.appendChild(p1);
      todo.appendChild(p2);
      todo.appendChild(p3);
      todo.appendChild(p4);

      console.log({ p1 });
      console.log({ p2 });
      console.log({ p3 });
      console.log({ p4 });

      let todoes = document.getElementById("todoes1");
      todoes.appendChild(todo);
    });
  }
}

function addTaskButtF() {
  //collect task's information into a object
  //take criteria on status
  //after 4 if condition move related one's array
  //card bolgonii todo haragdaj baigaa hesgiig dawtalt ashiglaj shineer zurna
  //erase all datas from add task and make them dissappear

  for (let i = 0; i < 4; i++) {
    let keyArr = ["Title", "Description", "Status", "Priority"];
    console.log(
      "barij awsan medeelel",
      document.getElementById(classnames[i]).value
    );
    receiver[`${keyArr[i]}`] = document.getElementById(classnames[i]).value;
    console.log("hiisen gazar ni", receiver);
    console.log("receiver ", i, "=", receiver, typeof receiver, "    in for");
  }

  console.log("receiver ", "=", receiver, typeof receiver, "out of for");
  console.log("receiver status:", receiver.Status, typeof receiver.Status);

  if (receiver.Status == "todo") {
    console.log("todo length", todoArr.length);
    todoArr[todoArr.length - 1] = receiver;
    console.log({ receiver });
    console.log("todo-g addtask fn-ees hewlew:", todoArr);
  } else if (receiver.Status == "in progress") {
    console.log(
      "uul ni status ni in progress mon baina. daanch tsaashaa unshixggui baina"
    );
    console.log("todo length", todoArr.length);
    inprogArr[inprogArr.length - 1] = receiver;
    console.log({ receiver });
    console.log({ inprogArr });
  } else if (receiver.Status == "stuck") {
    console.log("todo length", todoArr.length);
    stuckArr[stuckArr.length - 1] = receiver;
    console.log({ receiver });
    console.log({ stuckArr });
  } else if (receiver.Status == "done") {
    console.log("todo length", todoArr.length);
    doneArr[doneArr.length - 1] = receiver;
    console.log({ receiver });
    console.log({ doneArr });
  }
  todoesF();
}

interface();
makeTaskDiv();
