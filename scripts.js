//TODO get array of genres from API call?
const GENRES = ["action", "comedy", "horror"];

let selectedGenre;

let movieTitle;

window.onload = () => {
  var genresDiv = document.getElementById("genres");

  GENRES.forEach((genre) => {
    const btn = document.createElement("button");
    btn.setAttribute("data-genre", genre);
    btn.setAttribute("value", genre);
    btn.setAttribute("type", "button");
    btn.innerHTML = genre;
    genresDiv.appendChild(btn);
    btn.addEventListener("click", (e) => {
      let x = e.target.value;
      selectedGenre = x;
    });
  });
};

/* From a given genre, as String, fetch movie information from The Movie Database API */
function getMovie(genre) {
  /*TODO API call to get info. How to pick a movie? Options:
        1) Throw out top trending movie from selected genre?
            -for any subsequent searches, keep going down list?
        2) Randomly generate number from 1-100, use to pick from top 100 movies?
        3) Maybe option to check for this year only vs. all time? */
}

function displayInfo() {
  var displayDiv = document.getElementById("result");

  const title = document.createElement("p");
  title.setAttribute("id", "movieTitle"); //TODO get title of movie from API, store as global variable
  title.innerHTML = "Title: " + movieTitle;
  displayDiv.appendChild(title);
}

window.addEventListener("DOMContentLoaded", () => {
  var searchButton = document.getElementById("search");
  searchButton.addEventListener("click", () => {
    searchButton.innerHTML = selectedGenre;
    getMovie(selectedGenre);
    displayInfo();
  });
});
