document.addEventListener("DOMContentLoaded", function () {
  // code here will execute after the document is loaded
  const myForm = document.getElementById("search-form");
  myForm.addEventListener("submit", function (e) {
    // event listener code goes here
    e.preventDefault();
    const searchString = document.getElementById("search-bar").value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    if (searchString == "") {
      alert("Please Enter a Search String");
    } else {
      fetch(
        "https://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          const rendered = renderMovies(data.Search);
          document.getElementById("results").innerHTML = rendered;
          movieData = data.Search;
        });
    }
  });
  document.addEventListener("click", function (event) {
    // code for document click listener goes here
    if (event.target.id == "removeButton") {
      const movieID = event.target.dataset.imdbid;
      const buttonType = event.target.id;
      // console.log(buttonType == "addButton");
      // let ternaryTest = event.target;
      // ternaryTest.id = "addButton";
      // console.log(ternaryTest.innerText);
      let childCount = document.getElementById("results").childElementCount;
      // result = buttonType !== "addButton" ? "Add" : "Remove";
      // console.log("result=" + result);

      // ternaryTest.innerText = `${result}`;
      removeWatchlist(movieID);
    }
  });

  document.addEventListener("click", function (event) {
    // code for document click listener goes here
    const movieID = event.target.dataset.imdbid;
    const buttonType = event.target.id;
    const ternaryTest = event.target;
    if (event.target.className == "btn") {
      if (event.target.id == "addButton") {
        saveToWatchlist(movieID);
        result = buttonType !== "addButton" ? "Add" : "Remove";
        ternaryTest.innerText = `${result}`;
        ternaryTest.id = "removeButton";
      } else {
        removeWatchlist(movieID);
        result = buttonType !== "addButton" ? "Add" : "Remove";
        ternaryTest.innerText = `${result}`;
        ternaryTest.id = "addButton";
      }
    }
  });
});
function renderMovies(movieArray) {
  movieHtmlArray = movieArray.map(function (currentMovie) {
    return `    <div class="card border-dark col-lg-3 col-md-3 m-lg-3 m-md-3 m-sm-3 px-0 text-center text-white" style="background-color: #023e8a" id="movieContainer">
    <img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title} Poster" />
    <div class="row card-body align-items-center px-3 px-md-1 py-sm-2">
      <div class="col-lg-8 row-md">
        <div class="movie">
          <div class="title">${currentMovie.Title}</div>
          <div class="releaseDate">${currentMovie.Year}</div>
        </div>
      </div>
      <div class="col-lg-4 row-md mt-sm-1">
        <button type="button" class="btn" id="addButton" data-imdbid="${currentMovie.imdbID}" style="background-color:#ade8f4">Add</button>
      </div>
    </div>
  </div>
`;
  });
  return movieHtmlArray.join("");
}
function saveToWatchlist(movieID) {
  const movie = movieData.find(function (currentMovie) {
    console.log(currentMovie.imdbID);
    return currentMovie.imdbID == movieID;
  });
  let watchlistJSON = localStorage.getItem("watchlist");
  let watchlist = JSON.parse(watchlistJSON);
  const test = watchlist.find(function (currentMovie) {
    return currentMovie.imdbID === movieID;
  });
  if (watchlist == null) {
    watchlist = [];
    console.log("Watchlist Empty");
  } else if (test !== undefined) {
    alert("Already on Watchlist");
  }
  watchlist.push(movie);
  watchlistJSON = JSON.stringify(watchlist);
  localStorage.setItem("watchlist", watchlistJSON);
}

function removeWatchlist(movieID) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  let i = 0;
  const movie = watchlist.findIndex(function (currentMovie) {
    return currentMovie.imdbID == movieID;
  });
  watchlist.splice(movie, 1);
  watchlistJSON = JSON.stringify(watchlist);
  localStorage.setItem("watchlist", watchlistJSON);
  alert("Movie Removed");
}
