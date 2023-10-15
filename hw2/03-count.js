input = document.getElementById("user-input");
input.addEventListener("keydown", handleKeyDown);

function handleKeyDown() {
  let userInput = document.getElementById("user-input").value;
  const paragraph = document.getElementById("text").textContent;
  let text = document.getElementById("text");

  if (paragraph.includes(userInput)) {
    //creating an regular expression for a global and case-insensitive matching
    let allWords = new RegExp(`${userInput}`, "gi");
    //using mark to highlight the searched word.
    text.innerHTML = text.textContent.replace(
      allWords,
      (match) => `<mark>${match}</mark>`
    );
  }
}
