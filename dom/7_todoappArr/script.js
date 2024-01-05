//asuult nohtsoloos hamaarch ali function ajillah we gedgiig shiidex. (edit hiih uyd add task darhad)
//asuult yaaj arrow function-iig duudal ajiluulah we

let root = document.getElementById("root");
let boardsArr = ["To do", "In progress", "Stuck", "Done"];
let taskArr = [];
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
  title.innerTex = `${event}`;
  title.setAttribute("id", `${event}`);
  board.appendChild(title);
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
popup.appendChild(popupHeader);

//popup-iin content-uudiig ni hiij baigaa
taskProperties.map((event) => {
  //div-uudiig hiilee
  let property = document.createElement("div");
  property.setAttribute("class", "property");
  property.setAttribute("id", `${event}`);
  popup.appendChild(property);

  //property dotorhi content-uudiig hiij baigaa
  let label = document.createElement("label");
  label.setAttribute("class", "label");
  property.appendChild(label);

  //property dotorhi content-uudiig hiij baigaa
  let input = document.createElement("input");
  input.setAttribute("class", "input");
  input.setAttribute("id", `input${event}`);
  property.appendChild(input);
});

//popup-iin button hiij baigaa heseg
let popupButton = document.createElement("button");
popupButton.setAttribute("class", "button");
popupButton.innerText = "Add task";
// popupButton.setAttribute("click", addTask);
popupButton.addEventListener("click", addTask);
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
function addTask() {
  let tempObj = {
    id: idNum,
    Title: document.getElementsByClassName("input")[0].value,
    Description: document.getElementsByClassName("input")[1].value,
    Status: document.getElementsByClassName("input")[2].value,
    Priority: document.getElementsByClassName("input")[3].value,
  };
  console.log(document.getElementsByClassName("input")[0].value);
  console.log(document.getElementsByClassName("input")[1].value);
  console.log(document.getElementsByClassName("input")[2].value);
  console.log(document.getElementsByClassName("input")[3].value);
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

function arrangeAndRender() {
  for (let i = 0; i < 4; i++) {
    document.getElementById(`cards${boardsArr[i]}`).innerHTML = "";
  }

  let todoArr = [];
  for (let i = 0; i < 4; i++) {
    todoArr[i] = taskArr.filter((event) => {
      return event.Status == boardsArr[i];
    });
  }

  for (let i = 0; i < 4; i++) {
    todoArr[i].map((event) => {
      let card = document.createElement("div");
      let tick = document.createElement("button");
      let head = document.createElement("h3");
      let desc = document.createElement("p");
      let prio = document.createElement("button");
      let edit = document.createElement("button");
      let dele = document.createElement("button");

      card.appendChild(tick);
      card.appendChild(head);
      card.appendChild(desc);
      card.appendChild(prio);
      card.appendChild(edit);
      card.appendChild(dele);
      document.getElementById(`cards${boardsArr[i]}`).appendChild(card);
    });
  }
}

//modal

//add card darhad popup garch ireh
//

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

//done when checked
//  button-giin unique id-g barij awna.
//  array deeguur map erguuleed status-iig ni done bolgono
//  render fn ajiluulna.
//

//
//
//
//
//
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

let exmaple = [
  { neme: "asdf", age: 12, id: "Unique1" },
  { neme: "asdf", age: 12, id: "Unique1" },
];
