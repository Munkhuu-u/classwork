//  make divs + create buttons
const root = document.getElementById("root");
createrDiv();
function createrDiv() {
  //div manage
  let dispSec = document.createElement("div");
  let butttonsSec = document.createElement("div");
  let rightOperSec = document.createElement("div");
  let autoOperSec = document.createElement("div");
  let leftButSec = document.createElement("div");
  let numSec = document.createElement("div");

  dispSec.setAttribute("class", "disp");
  butttonsSec.setAttribute("class", "buttons");
  autoOperSec.setAttribute("class", "autoOper");
  leftButSec.setAttribute("class", "leftBut");
  rightOperSec.setAttribute("class", "rightOper");
  numSec.setAttribute("class", "num");

  leftButSec.appendChild(autoOperSec);
  leftButSec.appendChild(numSec);
  butttonsSec.appendChild(leftButSec);
  butttonsSec.appendChild(rightOperSec);
  root.appendChild(dispSec);
  root.appendChild(butttonsSec);

  //button manage
  let button;
  for (let i = 0; i < 3; i++) {
    button = document.createElement("button");
    button.setAttribute("id", `auto${i}`);
    button.style.backgroundColor = `rgb(165,165,165)`;
    button.style.color = `rgb(0,0,0)`;
    autoOperSec.appendChild(button);
  }
  for (let i = 0; i < 11; i++) {
    button = document.createElement("button");
    button.setAttribute("id", `numb${i}`);
    button.style.backgroundColor = `rgb(51,51,51)`;
    button.style.color = `rgb(255,255,255)`;
    numSec.appendChild(button);
  }
  for (let i = 0; i < 5; i++) {
    button = document.createElement("button");
    button.setAttribute("id", `oper${i}`);
    button.style.backgroundColor = `rgb(253,149,3)`;
    button.style.color = `rgb(255,255,255)`;
    rightOperSec.appendChild(button);
  }
}

//assign text into buttons

document.getElementById("auto0").innerHTML = "C";
document.getElementById("auto1").innerHTML = "±";
document.getElementById("auto2").innerHTML = "%";

document.getElementById("numb0").innerHTML = "7";
document.getElementById("numb1").innerHTML = "8";
document.getElementById("numb2").innerHTML = "9";
document.getElementById("numb3").innerHTML = "4";
document.getElementById("numb4").innerHTML = "5";
document.getElementById("numb5").innerHTML = "6";
document.getElementById("numb6").innerHTML = "1";
document.getElementById("numb7").innerHTML = "2";
document.getElementById("numb8").innerHTML = "3";
document.getElementById("numb9").innerHTML = "0";
document.getElementById("numb10").innerHTML = ".";

document.getElementById("oper0").innerHTML = "/";
document.getElementById("oper1").innerHTML = "*";
document.getElementById("oper2").innerHTML = "-";
document.getElementById("oper3").innerHTML = "+";
document.getElementById("oper4").innerHTML = "=";

//functions

root.setAttribute("onclick", "info(event)");

function info(event) {
  let info = event.target.id;
  console.log(info);
  let handinput = document.getElementById(`${info}`).innerHTML;
  console.log(handinput, typeof handinput);
}

//odoo hiih heregtei ymnuud ni too baiwal num1-ruu assing hiiseed, operaotr baiwal operatorluu assign hiigeed tgd daraa ni operator deer darhad hariud ni disp deer haruulna
