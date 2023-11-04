const url = "https://thronesapi.com/api/v2/Characters";

const list = document.querySelector("#list");

const fetchData = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

const createCharacterElements = (character) => {
  const col = document.createElement("div");
  col.classList.add("col-3", "p-0", "m-2");

  const figure = document.createElement("figure");
  figure.classList.add("figure", "h-100");

  figure.addEventListener("mouseover", () => {
    figure.style.backgroundColor = "darkBlue";
    figure.style.color = "white";
  });

  figure.addEventListener("mouseout", () => {
    figure.style.backgroundColor = "";
    figure.style.color = "";
  });

  const img = document.createElement("img");
  img.classList.add("figure-img", "img-fluid", "m-3");
  img.src = character.imageUrl;
  img.alt = "a picture of ${character.image}";

  const figcaption = document.createElement("figcaption");
  figcaption.classList.add("fw-bold", "p-2", "h-25", "d-inline-block");
  figcaption.innerHTML = character.fullName + "<br>" + character.title;

  figure.appendChild(img);
  figure.appendChild(figcaption);
  col.appendChild(figure);

  return col;
};

const createRows = (characters) => {
  const row = document.createElement("div");
  row.classList.add(
    "row",
    "w-75",
    "text-center",
    "mx-auto",
    "justify-content-center"
  );
  list.appendChild(row);

  characters.forEach((character) => {
    const characterElement = createCharacterElements(character);
    row.appendChild(characterElement);
  });
};

fetchData(url)
  .then((data) => {
    createRows(data);
  })
  .catch((error) => {
    const p = document.createElement("p");
    p.innerHTML = "An error occurred. Please try again.";
    list.appendChild(p);
  });
