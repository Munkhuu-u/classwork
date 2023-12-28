let obj = {};
function OnClickHandler(key, value) {
  obj = { ...obj, [key]: value };
}

console.log(OnClickHandler(one, sowhat)); // {button1:10, button2:20, button3:30}
