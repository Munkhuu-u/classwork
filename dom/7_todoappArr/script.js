//asuult nohtsoloos hamaarch ali function ajillah we gedgiig shiidex. (edit hiih uyd add task darhad)
//asuult yaaj arrow function-iig duudal ajiluulah we

let root = document.getElementById("root");
let boardsArr = ["To do", "In progress", "Stuck", "Done"];
let taskArr = [
  // {
  //   Description: "sdfg",
  //   PriorNum: 3,
  //   Priority: "High",
  //   Status: "To do",
  //   Title: "1234",
  //   id: 1,
  // },
];
let idNum = 1;
//let todoArr = [];
// let inprogArr = new Array();

let boards = document.createElement("div");
boards.setAttribute("class", "boards");
root.appendChild(boards);

//board bolon dotorhi zuiluudiig hiij baigaa heseg
boardsArr.map((event) => {
  //board hiij baigaa
  let board = document.createElement("div");
  board.setAttribute("class", "board");
  board.setAttribute("id", event);
  boards.appendChild(board);

  //boardiin title hiij baigaa
  let title = document.createElement("h2");
  title.setAttribute("class", "boardHeader");
  title.innerText = `${event}`;
  title.setAttribute("id", `${event}`);
  board.appendChild(title);

  //count number
  let countNum = document.createElement("p");
  countNum.setAttribute("id", `count${event}`);
  board.appendChild(countNum);
  boards.appendChild(board);

  //todo card hiij baigaa
  let cards = document.createElement("div");
  cards.setAttribute("class", "cards");
  cards.setAttribute("id", `cards${event}`);
  board.appendChild(cards);
  //add card button hiij baigaa heseg
  let button = document.createElement("button");
  button.setAttribute("class", "button");
  button.addEventListener("click", showPopup);
  button.innerText = "+Add card";
  board.appendChild(button);
});

//Add task pop up screen-iig hiij baigaa heseg
let taskProperties = ["Title", "Description", "Status", "Priority"];
let popup = document.createElement("div");
popup.setAttribute("class", "popup");
root.appendChild(popup);

let popupHeader = document.createElement("h2");
popupHeader.setAttribute("class", "popupHeader");
popupHeader.setAttribute("id", "popupHeader");
popupHeader.innerText = "Add task";
popup.appendChild(popupHeader);

//popup-iin content-uudiig ni hiij baigaa
taskProperties.map((event) => {
  if (event == "Title" || event == "Description") {
    //div-uudiig hiilee
    console.log(event);
    let property = document.createElement("div");
    property.setAttribute("class", "property");
    property.setAttribute("id", `${event}`);
    popup.appendChild(property);

    //property dotorhi content-uudiig hiij baigaa
    let label = document.createElement("label");
    label.setAttribute("class", "label");
    label.innerText = `${event}`;
    property.appendChild(label);

    //property dotorhi content-uudiig hiij baigaa
    let input = document.createElement("input");
    input.setAttribute("class", "input");
    input.setAttribute("id", `input${event}`);
    property.appendChild(input);
  } else if (event == "Status") {
    //div-uudiig hiilee
    let property = document.createElement("div");
    property.setAttribute("class", "property");
    property.setAttribute("id", `${event}`);
    popup.appendChild(property);

    //property dotorhi content-uudiig hiij baigaa
    let label = document.createElement("label");
    label.setAttribute("class", "label");
    label.innerText = `${event}`;
    property.appendChild(label);

    let input = document.createElement("select");
    input.setAttribute("class", "input");
    input.setAttribute("id", `input${event}`);

    let option1 = document.createElement("option");
    option1.value = `To do`;
    option1.innerText = `To do`;
    input.appendChild(option1);
    let option2 = document.createElement("option");
    option2.value = `In progress`;
    option2.innerText = `In progress`;
    input.appendChild(option2);
    let option3 = document.createElement("option");
    option3.value = `Stuck`;
    option3.innerText = `Stuck`;
    input.appendChild(option3);
    let option4 = document.createElement("option");
    option4.value = `Done`;
    option4.innerText = `Done`;
    input.appendChild(option4);
    property.appendChild(input);
  } else if (event == "Priority") {
    //div-uudiig hiilee
    let property = document.createElement("div");
    property.setAttribute("class", "property");
    property.setAttribute("id", `${event}`);
    popup.appendChild(property);

    //property dotorhi content-uudiig hiij baigaa
    let label = document.createElement("label");
    label.setAttribute("class", "label");
    label.innerText = `${event}`;
    property.appendChild(label);

    let input = document.createElement("select");
    input.setAttribute("class", "input");
    input.setAttribute("id", `input${event}`);

    let option1 = document.createElement("option");
    option1.value = "High";
    option1.innerText = `High`;
    input.appendChild(option1);
    let option2 = document.createElement("option");
    option2.value = "Medium";
    option2.innerText = `Medium`;
    input.appendChild(option2);
    let option3 = document.createElement("option");
    option3.value = "Low";
    option3.innerText = `Low`;
    input.appendChild(option3);
    property.appendChild(input);
  }
});

//popup-iin button hiij baigaa heseg
let popupButton = document.createElement("button");
popupButton.setAttribute("class", "button");
popupButton.setAttribute("id", "popupButton");
popupButton.innerText = "Add task";
// popupButton.setAttribute("click", addTask);
popupButton.addEventListener("click", addTaskButtF);
popup.appendChild(popupButton);
popup.style.display = "none";

//add card darhad popup garch ireh
function showPopup() {
  popup.style.display = "block";
}

//add task fn (pop-up)
//  input value-g barij awna
//  barij awsan value-uudiig object bolgono
//  tom array-ruu object-iig push hiine
//  popup window disappear
//  render fn duudaj ajiluulna
function addTaskButtF() {
  let tempObj = {
    id: idNum,
    Title: document.getElementsByClassName("input")[0].value,
    Description: document.getElementsByClassName("input")[1].value,
    Status: document.getElementsByClassName("input")[2].value,
    Priority: document.getElementsByClassName("input")[3].value,
  };

  //Sort hiihiin tuld Priority-d hargalzah utga onoogood tempObjruu hiij baigaa
  if (document.getElementsByClassName("input")[3].value == "High") {
    tempObj.PriorNum = 3;
  } else if (document.getElementsByClassName("input")[3].value == "Medium") {
    tempObj.PriorNum = 2;
  } else if (document.getElementsByClassName("input")[3].value == "Low") {
    tempObj.PriorNum = 1;
  }

  // let tempPri = document.getElementsByClassName("input")[3].value;
  taskArr.push(tempObj);
  console.log(taskArr);

  //task-iin input-iig hoosloj baigaaa
  document.getElementsByClassName("input")[0].value = "";
  document.getElementsByClassName("input")[1].value = "";
  document.getElementsByClassName("input")[2].value = "";
  document.getElementsByClassName("input")[3].value = "";
  popup.style.display = "none";
  idNum++;
  arrangeAndRender();
}

//arrange and render fn:
//  cards dotor card bolhoj hiine
function arrangeAndRender() {
  //shine card nemhiin omno huuchin card-uudiig ustgaj baigaa
  for (let i = 0; i < 4; i++) {
    document.getElementById(`cards${boardsArr[i]}`).innerHTML = "";
  }
  //  tom array-g filterdeed 4 jijig array bolgono
  let todoArr = [];
  for (let i = 0; i < 4; i++) {
    todoArr[i] = taskArr.filter((event) => {
      return event.Status == boardsArr[i];
    });

    todoArr[i].sort((a, b) => {
      return b.PriorNum - a.PriorNum;
    });
  }

  //count number ajiluulj hiij baigaa heseg
  todoArr.map((event, index) => {
    let countNum = document.getElementById(`count${boardsArr[index]}`);
    if (event.length == 0) {
      countNum.innerText = `0`;
    } else {
      countNum.innerText = `${event.length}`;
    }
  });

  //  card-iin div uusgeed
  //  dotor ni content-uudaa hiij ogj baigaa heseg
  //  cards-ruu hiij baigaa
  for (let i = 0; i < 4; i++) {
    todoArr[i].map((event) => {
      let card = document.createElement("div");
      card.setAttribute("class", "card");

      let tick = document.createElement("button");
      tick.innerText = `Done`;
      card.appendChild(tick);

      let head = document.createElement("h3");
      head.innerText = `${event.Title}`;
      card.appendChild(head);

      let desc = document.createElement("p");
      desc.innerText = `${event.Description}`;
      card.appendChild(desc);

      let prio = document.createElement("button");
      prio.innerText = `${event.Priority}`;
      card.appendChild(prio);

      let edit = document.createElement("button");
      edit.setAttribute("id", `${event.id}`);
      edit.addEventListener("click", (event) => {
        let id = event.target.id;
        editF(id);
      });
      edit.innerText = `Edit`;
      card.appendChild(edit);

      let dele = document.createElement("button");
      dele.innerText = `Delete`;
      dele.setAttribute("id", `${event.id}`);
      dele.addEventListener("click", (event) => {
        let id = event.target.id;
        deleteF(id);
      });
      card.appendChild(dele);

      //zow cards-ruu zow array-iig ni oruulj ogj baigaa heseg
      document.getElementById(`cards${boardsArr[i]}`).appendChild(card);
    });
  }
  document.getElementById("popupButton").innerText = "Add task";
  document.getElementsByClassName("popupHeader").innerText = "Add task";
}
function editF(id) {
  let tempObj = taskArr.filter((event) => {
    return event.id == id;
  });

  for (let i = 0; i < 4; i++) {
    if (i == 0) {
      document.getElementById(`input${taskProperties[i]}`).value =
        tempObj[0].Title;
    } else if (i == 1) {
      document.getElementById(`input${taskProperties[i]}`).value =
        tempObj[0].Description;
    } else if (i == 2) {
      document.getElementById(`input${taskProperties[i]}`).value =
        tempObj[0].Status;
    } else if (i == 3) {
      document.getElementById(`input${taskProperties[i]}`).value =
        tempObj[0].Priority;
    }
  }

  taskArr = taskArr.filter((event) => {
    return event.id != id;
  });
  document.getElementById("popupButton").innerText = "Confirm Edit";
  document.getElementById("popupHeader").innerText = "Edit task";

  showPopup();
}

function deleteF(id) {
  taskArr = taskArr.filter((event) => {
    return event.id != id;
  });
  arrangeAndRender();
}

//  Done----------------------------------------------------------------
//add card darhad popup garch ireh
//add task fn (pop-up)
//  input value-g barij awna
//  barij awsan value-uudiig object bolgono
//  tom array-ruu object-iig push hiine
//  popup window disappear
//  render fn duudaj ajiluulna

//render fn:
//  tom array-g filterdeed 4 jijig array bolgono
//  todo bolgoniig div uusgeed
//  dotor ni content-uudaa hiij ogood
//  cards dotor card bolhoj hiine

//  board name
//  pop up screen title
//  p that counts card
//  css border + center + padding
//  edit, delete button name
//  drop down
//  sort by priority
//edit fn
//  button-giin unique id-g barij awna.
//  array deeguur map erguuleed id ni taarch baiwal value-uudiig ni barij awna
//  pop-up-iin input-nuudiig barij awsan value-uudaar solino
//  pop-up-iig gargaj irne
//  garch irsen medeelliig garaar oorchilno
//  add task towch darhad huuuchin id-nii object-iig ni ustgana
//  add task fn (pop-up) ajiluulna
//delete fn
//  button-giin unique id-g barij awna.
//  array deeguur filter erguuleed id-tai taarahgui id-uudiig ni awaad tom array-uudruugaa assign hiine
//  render fn ajiluulna.

//  Remaining----------------------------------------------------------------

//done when checked
//  button-giin unique id-g barij awna.
//  array deeguur map erguuleed status-iig ni done bolgono
//  render fn ajiluulna.

//  drag and drop
//  if add task properties == "" { not able to press the button, and make input red}
//  modal

// function helper(element, className, idName, appendParent) {
//   if (element != "" && appendParent != "") {
//     let temp = document.createElement(`${element}`);
//     temp.setAttribute("class", `${className}`);
//     temp.setAttribute("id", `${idName}`);
//     k.appendChild(temp);
//   }
//   return temp;
// }
// let testingElement = helper("p", "", "testClass", root);

// Hig
// Low
// Mid
