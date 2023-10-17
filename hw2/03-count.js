input = document.getElementById("user-input");
input.addEventListener("keydown", handleKeyDown);

function handleKeyDown() {
  let userInput = document.getElementById("user-input").value.trim();
  const textElement = document.getElementById("text");
  const text = textElement.textContent;

  if (userInput === "") {
    // Clear any previous highlights when the input is empty
    textElement.innerHTML = text;
    return;
  }

  // Split the text into an array of words
  const words = text.split(/\s+/);

  // Map each word to either the original word or a highlighted version
  const highlightedText = words
    .map((word) => {
      const normalizedWord = word.replace(/[.,!?]/g, ""); // Remove punctuation for matching
      if (normalizedWord.toLowerCase() === userInput.toLowerCase()) {
        return `<mark>${word}</mark>`;
      } else {
        return word;
      }
    })
    .join(" "); // Join the words back into a string

  // Update the HTML with the highlighted text
  textElement.innerHTML = highlightedText;
}
