function add() {
    let num1 = Number(document.getElementById("input1").value);
    let num2 = Number(document.getElementById("input2").value);
    let sum = num1 + num2;
    document.getElementById("answer").innerText = sum;
  }
  function subtract() {
    let num1 = Number(document.getElementById("input1").value);
    let num2 = Number(document.getElementById("input2").value);
    let sum = num1 - num2;
    document.getElementById("answer").innerText = sum;
  }
  function multiply() {
    let num1 = Number(document.getElementById("input1").value);
    let num2 = Number(document.getElementById("input2").value);
    let sum = num1 * num2;
    document.getElementById("answer").innerText = sum;
  }
  function divide() {
    let num1 = Number(document.getElementById("input1").value);
    let num2 = Number(document.getElementById("input2").value);
    let sum = num1 / num2;
    document.getElementById("answer").innerText = sum;
  }
  
  function start() {
    document.getElementById("randomNumber").innerText = Math.round(
      Math.random() * 100
    );
  }
  
  function check() {
    console.log(
      "type of inserted number:",
      typeof Number(document.getElementById("insertedNumber").innerText),
      "value",
      Number(document.getElementById("insertedNumber").value)
    );
    if (
      Number(document.getElementById("insertedNumber").value) ==
      Number(document.getElementById("randomNumber").innerText)
    ) {
      document.getElementById("highOrLow").innerText = "Correct";
    } else if (
      Number(document.getElementById("insertedNumber").value) >
      Number(document.getElementById("randomNumber").innerText)
    ) {
      document.getElementById("highOrLow").innerText = "Your number is greater";
    } else {
      document.getElementById("highOrLow").innerText = "Your number is lower";
    }
  }