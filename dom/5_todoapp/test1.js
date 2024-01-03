let arr1 = [];
let obj1 = { name: "munkh", age: 24, location: "mgl", repetition: "often" };
let obj2 = { name: "sam", age: 22, location: "usa", repetition: "usually" };
// arr1.push(obj1);
console.log("arr", arr1);

arr1.push(obj2);
arr1.push(obj1);
arr1.push(obj1);

obj1 = { name: "munkh", age: 24, location: "mgl", repetition: "always" };

console.log("arr", arr1);
