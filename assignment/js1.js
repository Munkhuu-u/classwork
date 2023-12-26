answer = "";

function y(x) {
  for (let i = 0; i < x / 3; i++) {
    answer = answer + (x - 3 * i) + "\n";
  }
  return answer;
}

let x = 10;
console.log(y(x));
