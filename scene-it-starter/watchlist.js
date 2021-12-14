document.addEventListener("DOMContentLoaded", function () {
  // code here will execute after the document is loaded
  let watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const rendered = renderMovies(watchlist);
  document.getElementById("results").innerHTML = rendered;
  document.addEventListener("click", function (event) {
    // code for document click listener goes here
    if (event.target.id == "removeButton") {
      const movieID = event.target.dataset.imdbid;
      let childCount = document.getElementById("results").childElementCount;
      removeWatchlist(movieID);
      event.target.parentElement.parentElement.parentElement.remove();
      if (childCount == 1) {
        document.getElementById(
          "results"
        ).innerHTML = `<div class="card border-dark col-4 m-3 px-0 text-center text-white" style="background-color: #023e8a" id="movieContainer">
        Nothing to See Here
      </div>`;
      }
    }
  });
});

function renderMovies(movieArray) {
  movieHtmlArray = movieArray.map(function (currentMovie) {
    return `    <div class="card border-dark col-lg-3 col-md-2 m-lg-3 m-sm-2 px-0 text-center text-white" style="background-color: #023e8a" id="movieContainer">
      <img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title} Poster" />
      <div class="row card-body justify-content-center">
        <div class="row">
          <div class="movie">
            <div class="title">${currentMovie.Title}</div>
            <div class="releaseDate">${currentMovie.Year}</div>
          </div>
        </div>
        <div class="row mt-1 mb-0">
          <button type="button" class="btn" id="removeButton" data-imdbid="${currentMovie.imdbID}" style="background-color:#ade8f4">Remove</button>
        </div>
      </div>
    </div>
  `;
  });
  return movieHtmlArray.join("");
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
}
