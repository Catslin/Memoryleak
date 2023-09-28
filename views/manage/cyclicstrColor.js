function changeColor() {
  var cyclicstr = document.getElementById("cyclicstr");
  var colors = [
    "#FF4136",
    "#FF851B",
    "#FFDC00",
    "#2ECC40",
    "#0074D9",
    "#B10DC9",
  ];
  let index = 0;
  setInterval(function () {
    cyclicstr.style.color = colors[index];
    index = (index + 1) % colors.length;
  }, 500);
  // 变色
}

const inputText = document.getElementById("inputText");
const h1 = inputText.querySelector("h1");
const p = inputText.querySelector("p");
h1.style.fontFamily = "Arial, sans-serif";
p.style.fontFamily = "Georgia, serif";

const h1Text = "Catslin is Here";
const firstPart = "Welcome to my webpage, here is a brief self-introduction";
const secondPart =
  "I willshow some of my favorite things  /💖 Here,  I hope you will like it too";
const newText = `${firstPart} ${secondPart}`;
let h1Index = 0;
let pIndex = 0;

function typeH1() {
  if (h1Index < h1Text.length) {
    h1.textContent += h1Text.charAt(h1Index);
    h1Index++;
    setTimeout(typeH1, 100);
  } else {
    typeText();
  }
}

function typeText() {
  if (pIndex < newText.length) {
    p.innerHTML += newText.charAt(pIndex);
    pIndex++;
    setTimeout(typeText, 50);
  }
}
typeH1();
changeColor();
// 打字机效果
