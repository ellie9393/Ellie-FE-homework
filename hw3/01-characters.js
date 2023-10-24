// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

let list = document.querySelector('#list');

const fetchData = async (url) => {
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    let row = document.createElement('div');
    row.classList.add('row', 'w-75', 'text-center', 'mx-auto', 'justify-content-center');
    list.appendChild(row);

    const element = data.map(character =>{
      let col =document.createElement('div');
      col.classList.add('col-3', 'p-0', 'm-2');
      row.appendChild(col);

      let figure = document.createElement('figure');
      figure.classList.add('figure', 'h-100');
      col.appendChild(figure);

      let img = document.createElement('img');
      img.classList.add('figure-img', 'img-fluid');
      img.src=character.imageUrl;
      img.alt = character.image;
      figure.appendChild(img);

      let figcaption= document.createElement('figcaption');
      figcaption.classList.add('fw-bold', 'p-2', 'h-25', 'd-inline-block');
      figcaption.innerHTML=character.title;
      figure.appendChild(figcaption);
    });
    document.getElementById("loading").style.display="none";
  }

  catch(error){
    let p = document.createElement('p');
    p.innerHTML= 'Ann error accured. Please try again';
    list.appendChild(p);
    document.getElementById("loading").style.display="none";
  }

};

fetchData(url);
