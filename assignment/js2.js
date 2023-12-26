let min = 0;
let max = 0;
let answer = 0;
let printtext = "";
let loop = 0;

function y(a, b) {
  if (a > b) {
    min = b;
    max = a;
    loop = max - min + 1;
    for (let i = 0; i <= loop; i++) {
      // console.log("ehnii for loop body");
      answer = min + i;
      printtext = printtext + answer + "\n";
      // console.log(printtext);
    }
  } else if (a < b) {
    min = b;
    max = a;
    loop = max - min + 1;
    for (let i = 0; i <= loop; i++) {
      // console.log("2doh for loop body");
      answer = min + i;
      printtext = printtext + answer + "\n";
      // console.log(printtext);
    }
  }
  return printtext;
}

let a = 15;
let b = 9;

console.log(y(15, 9));
