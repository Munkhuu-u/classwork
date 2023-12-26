let answerNum = 0;
let answerStr = "";

function y(x) {
  let loopNum = (x[1] - x[0] - ((x[1] - x[0]) % x[2])) / x[2];
  answerNum = x[0];
  for (let i = 0; i <= loopNum; i++) {
    answerStr += x[0] + x[2] * i + "\n";
    console.log(answerStr);
  }
  // console.log("loopNum: ", loopNum);
  return answerStr;
}
let x = [10, 20, 2];
console.log(y(x));
