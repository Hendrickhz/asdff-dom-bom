//selector

const obj = document.querySelector("#obj");
const text = document.querySelector("#text");
const fontSize = document.querySelector("#fontSize");
const selectFont = document.querySelector("#selectFont");
const color = document.querySelector("#color");
const fonts = [
  "Latin Wide",
  "Monospace",
  "Gill Sans",
  "Cooper Black",
  "centaur Regular",
  "Tahoma",
];
//functions
const changeText = (event) => {
  obj.innerText = event.target.value;
  // obj.innerText = text.value;
};

const changeColor = (event) => {
  obj.style.color = event.target.value;
};

const changeFontSize = (event) => {
  obj.style.fontSize = event.target.value + "px";
};

const changeFontFamily = (event) => {
  obj.style.fontFamily = event.target.value;
};
//create options for loop
fonts.forEach((font) => selectFont.append(new Option(font, font)));

//change html
fontSize.min = parseFloat(window.getComputedStyle(obj).fontSize);
fontSize.max = 100;
fontSize.value = fontSize.min;

//event
text.addEventListener("keyup", changeText);
color.addEventListener("change", changeColor);
fontSize.addEventListener("change", changeFontSize);
selectFont.addEventListener("change", changeFontFamily);
