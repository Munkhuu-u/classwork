//  make divs + create buttons

let char;
let charType;
let numb1 = "";
let numb2 = "";
let operator = "";
let result = "";
let dispSec = document.createElement("div");
let butttonsSec = document.createElement("div");

function charTypeF() {
  if ((Number(char) <= 9 && Number(char) >= 0) || char == ".") {
    charType = "number";
    // console.log(charType);
  } else if (char == "C" || char == "±" || char == "%") {
    charType = "autoOperator";
    // console.log(charType);
  } else {
    charType = "simpleOperator";
    // console.log(charType);
  }
}

function operatorF() {
  console.log("operatorF ajillaa");

  if (numb1 != "" && charType == "autoOperator") {
    operateF();
    console.log("printing from operatorF char:", char);
  } else if (numb1 != "" && charType == "simpleOperator") {
    operator = char;
    console.log("printing from operatorF char:", char);
  } else {
    console.log("operatorF ali ni ch bish");
    funcAll();
  }
}

function operateF() {
  //simple operation
  console.log("operating .......");
  console.log("in operation function operator:", operator);
  if (operator == "*") {
    console.log("operating * ");
    result = numb1 * numb2;
    cleanerF();
  } else if (operator == "/") {
    console.log("operating / ");
    result = numb1 / numb2;
    cleanerF();
  } else if (operator == "+") {
    console.log("operating + ");
    result = numb1 + numb2;
    cleanerF();
  } else if (operator == "-") {
    console.log("operating - ");
    result = numb1 - numb2;
    cleanerF();
  } else {
    console.log("any of simple operation");
  }

  //direct operator
  if (char == "%") {
    console.log("operating % ");
    result = numb1 / 100;
    cleanerF();
  } else if (char == "±") {
    console.log("operating ± ");
    result = numb1 * -1;
    cleanerF();
  } else if (char == "C") {
    console.log("operating C ");
    result = "";
    numb1 = "";
    cleanerF();
  }
}

function cleanerF() {
  console.log("cleaner ajillaa...");
  console.log(
    "result:",
    result,
    " num1:",
    numb1,
    " operator:",
    operator,
    " numb2:",
    numb2
  );
  numb1 = result;
  dispSec.innerText = numb1;
  result = "";
  operator = "";
  numb2 = "";
}

const funcAll = (event) => {
  console.log(
    "mother function working ....",
    ", result:",
    result,
    typeof result,
    ", num1:",
    numb1,
    typeof numb1,
    ", operator:",
    operator,
    typeof operator,
    ", numb2:",
    numb2,
    typeof numb2
  );

  //determine what is clicked and type of
  char = event.target.innerText;
  charTypeF();

  if (char == "C") {
    cleanerF();
  }

  // determine numb1 and auto operator
  if (charType == "number" && numb2 == "" && operator == "") {
    dispSec.innerText += char;
    numb1 = Number(dispSec.innerText);
    console.log("numb1:", numb1);
  } else if (operator != "") {
    console.log("num1 baigaa, operator hooson bish");
  } else {
    console.log("operatorF-iig det-1 duudlaa");
    operatorF();
  }

  //determine numb2
  if (numb1 != "" && numb2 == "" && operator != "" && charType == "number") {
    dispSec.innerText = "";
    dispSec.innerText += char;
    numb2 = Number(dispSec.innerText);
    console.log("numb2", numb2);
  } else if (
    numb1 != "" &&
    numb2 != "" &&
    operator != "" &&
    charType == "number"
  ) {
    dispSec.innerText += char;
    numb2 = Number(dispSec.innerText);
    console.log("numb2", numb2);
  }

  //starting operation
  if (numb2 != "" && charType == "simpleOperator") {
    console.log("line 140");
    console.log("line 141 operator:", operator);
    operateF();
  }
};

function createrFn() {
  //div manage
  dispSec.setAttribute("class", "display");
  butttonsSec.setAttribute("class", "buttons");
  root.appendChild(dispSec);
  root.appendChild(butttonsSec);

  //button manage
  let button;
  for (let i = 0; i < 19; i++) {
    let string = "C±%/789*456-123+0.=";
    button = document.createElement("button");
    button.setAttribute("id", `butt${i}`);
    button.setAttribute("class", `button`);
    button.innerText = string[i];
    button.addEventListener("click", funcAll);
    butttonsSec.appendChild(button);
  }
}

//on air
createrFn();

//todo
// how to check how many .. in number

//toask
// target-aar innerHTML, innerText-iig l barij awah bolomjtoi ym uu

//mother function working .... , result:  string , num1:  string , operator:  string , numb2:  string
//mother function working .... , result:  string , num1:  string , operator: C string , numb2:  string

let element;
for (let i = 0; i < 19; i++) {
  element = document.getElementById(`butt${i}`);
  element.style.fontSize = "20px";
  // element.style.color = "Black";
  // element.style.fontFamily = "Helvetica";
}
