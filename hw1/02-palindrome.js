const elem = document.querySelector("input");
const response = document.getElementById("response");

elem.addEventListener("input", handleInput);

function handleInput() {
  const inputNumber = parseFloat(this.value);

  if (!isNaN(inputNumber) && inputNumber >= 0) {
    const isPalin = isPalindrome(inputNumber);
    if (isPalin) {
      response.innerHTML = "Yes, this is a plaindrome!";
      response.style.color = "green";
    } else {
      response.innerHTML = "No, try again!";
      response.style.color = "red";
    }
  } else {
    response.innerHTML = "invalid response";
    response.style.color = "gray";
  }
}

function isPalindrome(input) {
  const number = input.toString();
  const reversedNumber = number.split("").reverse().join("");
  return number === reversedNumber;
}
