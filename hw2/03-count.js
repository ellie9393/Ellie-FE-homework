input = document.getElementById("user-input");
input.addEventListener("keydown", handleKeyDown);

function handleKeyDown() {
  //remove whitespace characters from the start and end of a string using trim
  const userInput = document.getElementById("user-input").value.trim();
  const textElement = document.getElementById("text");
  const text = textElement.textContent;

  // Clear any previous highlights when the input is empty
  if (userInput === "") {
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
      } 
      
      return word;
      
    })
    .join(" "); // Join the words back into a string

  // Update the HTML with the highlighted text
  textElement.innerHTML = highlightedText;
}
