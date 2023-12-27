let arr = [
  { id: 1, name: "iphone", price: 234, stock: 12 },
  { id: 2, name: "macbook", price: 456, stock: 12 },
  { id: 3, name: "imac", price: 93, stock: 12 },
  { id: 4, name: "mouse", price: 12, stock: 12 },
];

function findDelete(a) {
  let deleted = arr.filter((e) => {
    return e.id != a;
  });
  return deleted;
}

// console.log(findDelete(2));

function findEdit(a) {
  let edited = arr.map((e) => {
    if (e.name == a) {
      e.price = e.price * 0.5;
    }
    return e;
  });
  return edited;
}

// console.log(findEdit("mouse"));
function findStocked(a, b) {
  let stocked;
  stocked = arr.map((e) => {
    if (e.name == a) {
      e.stock = e.stock - b;
    }
    return e;
  });
  return stocked;
}

console.log(findStocked("iphone", 2));
