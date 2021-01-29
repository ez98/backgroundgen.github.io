var cssDetails = document.querySelector("H3");
var colorOne = document.getElementById("input-1");
var colorTwo = document.getElementById("input-2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("btn");

function setGradient(){
	body.style.background = "linear-gradient(to right," + colorOne.value + ", " + colorTwo.value + ")";
	cssDetails.innerHTML = "";
	cssDetails.appendChild(document.createTextNode("CSS-Style: linear-gradient(to right, " + colorOne.value + ", " + colorTwo.value+ ");"));
}
function setColorInputs(){
	colorOne.value = "#FF0000";
	colorTwo.value = "#0000FF";
	cssDetails.appendChild(document.createTextNode("CSS-Style: linear-gradient(to right, " + colorOne.value + ", " + colorTwo.value+ ");"));
}
function generateRandomHexCode(){
  const digits = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

  let hexCode = "#";

  while( hexCode.length < 7 ){
    hexCode += digits[ Math.round( Math.random() * digits.length ) ] //math.random() returns a float b/n 0 and 1. Multiply by length to stay within array length.
  }

  return hexCode 
}
function randomColors(){
	var hexCodeOne = generateRandomHexCode();
	var hexCodeTwo = generateRandomHexCode();

	body.style.background = "linear-gradient(to right," + hexCodeOne + ", " + hexCodeTwo + ")";
	colorOne.value = hexCodeOne;
	colorTwo.value = hexCodeTwo;
	cssDetails.innerHTML = "";
	cssDetails.appendChild(document.createTextNode("CSS-Style: linear-gradient(to right, " + hexCodeOne + ", " + hexCodeTwo + ");"));
}
// function setCSS(){
// 	cssDetails.innerHTML = "";
// 	cssDetails.appendChild(document.createTextNode("First Color:" + colorOne.value + "\nSecond Color:" + colorTwo.value));
// }
setColorInputs();
colorOne.addEventListener("input",setGradient);
colorTwo.addEventListener("input",setGradient);
randomBtn.addEventListener("click",randomColors);