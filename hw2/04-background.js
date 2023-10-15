// Add your code here

let button = document.getElementById("button");
button.addEventListener("click", changColor);
let input = document.getElementById("input");

let interval;


function changColor(){
    const background = document.querySelector("body");
    if(button.value === "Start") {
        interval = setInterval(function() {
            background.style.backgroundColor = color();
          }, 1000);
        button.value = "Stop";

    }
    else if(button.value === "Stop") {
        clearInterval(interval);
        button.value = "Start";
        background.style.backgroundColor = "blue";
    }
}
    function color() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
  
