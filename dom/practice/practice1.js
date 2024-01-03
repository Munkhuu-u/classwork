//Problem 1.

// const numbers = [1, 2, 3, 4, 5];

// let multipliedNumbers = numbers.map((e) => {
//   return e * 2;
// });

// console.log(multipliedNumbers);
// Your code here
// Expected output: [2, 4, 6, 8, 10]

//Problem 2.

const chiglel = ["mubis", "bohiin orgoo", "zuun dorow", "jukow"];

const urDun = chiglel.map((buudal) => {
  return buudal.toUpperCase();
});
console.log(urDun);

//map ni awtobus shig neg neg buudlaar uragshlaad chigleliinhee daguu ywna
//arrow function ni buudal burd hiih uildel
// = temdeg bolon .map (method) ni uildel hiisen ur dunguudiig urDun array-d tsugluulj awna

//Problem 3.
let root = document.getElementById("root");
let chigleluud = ["mubis", "bohiin orgoo", "zuun dorow", "jukow"];

let urDun1 = chigleluud.map((buudal) => {
  return `<p>${buudal}</p>`;
});

root.innerHTML = `${urDun1}`;

console.log(urDun1);
