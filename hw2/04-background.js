// Add your code here
let input = document.getElementById("userinput");
const background = document.querySelector("body");
let button = document.getElementById("button");
button.addEventListener("click", changColor);

let interval;
window.addEventListener("load", () => {
  interval = setInterval(function () {
    background.style.backgroundColor = color();
  }, 3000);
  button.value = "Stop";
  button.style.background = "red";
});

function changColor() {
  if (button.value === "Start") {
    if (input) {
      interval = setInterval(function () {
        background.style.backgroundColor = color();
      }, input.value * 1000);
    }

    button.value = "Stop";
    button.style.background = "red";
  } else if (button.value === "Stop") {
    clearInterval(interval);
    button.value = "Start";
    button.style.background = "blue";
  }
}

function color() {
  let color = "";
  for (let i = 0; i < 3; i++) {
    color += Math.floor(Math.random() * 256);
    color += ",";
  }
  rgbacolor = "rgba(" + color + "0.5)";
  return rgbacolor;
}
