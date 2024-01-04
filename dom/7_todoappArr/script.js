let root = document.getElementById("root");
let boardsArr = ["To do", "In progress", "Stuck", "Done"];

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
  title.setAttribute("id", `${event}`);
  board.appendChild(title);
  //todo card hiij baigaa
  let cards = document.createElement("div");
  cards.setAttribute("class", "cards");
  cards.setAttribute("id", `${event}`);
  board.appendChild(cards);
  //add card button hiij baigaa heseg
  let button = document.createElement("button");
  button.setAttribute("class", "button");
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
popup.appendChild(popupButton);

function helper(element, className, idName, appendParent) {
  if (element != "" && appendParent != "") {
    let temp = document.createElement(`${element}`);
    temp.setAttribute("class", `${className}`);
    temp.setAttribute("id", `${idName}`);
    k.appendChild(temp);
  }
  return temp;
}

let testingElement = helper("p", "", "testClass", root);
