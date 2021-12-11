let timer;
let deleteFirstPhotoDelay;
async function start() {
  const response = await fetch(
    "http://www.omdbapi.com/?s=captain+america&apikey=bb60bab3"
  );
  const data = await response.json();
  const data2 = data.Search[0];
  const data3 = data.Search;
  createBreedList(data3);
  //   //   console.log(data2["Title"]);
  //   const pic = Object.values(data3)[0];
  //   console.log(Object.values(data3));
}
start();

function createBreedList(breedList) {
  document.getElementById("breed").innerHTML = `
    <select id="dropdown" onchange="loadByBreed(this.value)">
    <option>Pick a Captain America Movie</option>
    ${Object.values(breedList)
      .map(function eachKey(k) {
        return `<option>${k["Title"]}: ${k["Year"]}</option>`;
      })
      .join("")}
  </select>
    `;
}

async function loadByBreed(breed) {
  const dropdownIndex = document.getElementById("dropdown").selectedIndex;
  if (breed != "Pick a Captain America Movie") {
    const response = await fetch(
      "http://www.omdbapi.com/?s=captain+america&apikey=bb60bab3"
    );
    const data = await response.json();
    const data3 = data.Search[dropdownIndex - 1];
    const IMDB = data3["imdbID"];
    document.getElementById("slideshow").innerHTML = `
      <div class="slide" style="background-image: url('${data3["Poster"]}')"></div>`;

    loadIMDB(IMDB);
  } else {
    document.getElementById("slideshow").innerHTML = ``;
    document.getElementById("movieTitle").innerHTML = ``;
    document.getElementById("year").innerHTML = ``;
    document.getElementById("rating").innerHTML = ``;
    document.getElementById("director").innerHTML = ``;
    document.getElementById("imdbRating").innerHTML = ``;
    document.getElementById("plot").innerHTML = ``;
    document.getElementById("imdbLink").innerHTML = ``;
  }
}

async function loadIMDB(IMDB) {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${IMDB}&apikey=bb60bab3`
  );
  const data = await response.json();
  document.getElementById("movieTitle").innerHTML = `
        Movie Title: ${data["Title"]}`;
  document.getElementById("year").innerHTML = `
        Release Date: ${data["Released"]}`;
  document.getElementById("rating").innerHTML = `
        Movie Rating: ${data["Rated"]}`;
  document.getElementById("director").innerHTML = `
        Directed By: ${data["Director"]}`;
  document.getElementById("imdbRating").innerHTML = `
        IMDB score: ${data["imdbRating"]}/10`;
  document.getElementById("plot").innerHTML = `
        Plot: ${data["Plot"]}`;
  document.getElementById("imdbLink").innerHTML = `
  <a href="https://www.imdb.com/title/${data["imdbID"]}/"
  ><button>IMDB Link</button></a
>`;

  createSlideShow(data3);
}

// function createSlideShow(images) {
//   let currentPosition = 0;
//   clearInterval(timer);
//   clearTimeout(deleteFirstPhotoDelay);
//   if (images.length > 1) {
//     document.getElementById("slideshow").innerHTML = `
//       <div class="slide" style="background-image: url('${images[0]}')"></div>
//       <div class="slide" style="background-image: url('${images[1]}')"></div>
//       `;
//     currentPosition += 2;
//     if (images.length == 2) currentPosition = 0;
//     timer = setInterval(nextSlide, 3000);
//   } else {
//     document.getElementById("slideshow").innerHTML = `<div
//       class="slide" style="background-image: url('${images[0]}')"></div>
//       <div class="slide"></div>`;
//   }
//   function nextSlide() {
//     document
//       .getElementById("slideshow")
//       .insertAdjacentHTML(
//         "beforeend",
//         `<div class="slide" style="background-image: url('${images[currentPosition]}')"></div>`
//       );
//     deleteFirstPhotoDelay = setTimeout(() => {
//       document.querySelector(".slide").remove();
//     }, 1000);
//     if (currentPosition + 1 >= images.length) {
//       currentPosition = 0;
//     } else {
//       currentPosition++;
//     }
//   }
// }
