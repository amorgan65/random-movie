//TODO get array of genres from API call?
const GENRES = ["action", "comedy", "horror"];

let selectedGenre;
let movieTitle;

/* Function to get Genre data through API Fetch request*/
function fetchGenres() {

}

/* create & fill array/map of all genres (& maybe with corresponding IDs?) */
function setGenres() {

}

window.onload = () => {
  let genresDiv = document.getElementById("genres");

  GENRES.forEach((genre) => {
    const btn = document.createElement("button");

    btn.setAttribute("data-genre", genre);
    btn.setAttribute("value", genre);
    btn.setAttribute("type", "button");
    btn.innerHTML = genre;
    genresDiv.appendChild(btn);

    btn.addEventListener("click", (element) => {
      let clickedGenre = element.target.value;
      selectedGenre = clickedGenre;
    });
  });
};

/* From a given genre, as String, fetch movie information from The Movie Database API */
function getMovie(genre) {
  /* TODO API call to get info. How to pick a movie? Options:
        1) Throw out top trending movie from selected genre?
            -for any subsequent searches, keep going down list?
        2) Randomly generate number from 1-100, use to pick from top 100 movies?
        3) Maybe option to check for this year only vs. all time? */
}

/* When called, this will create new DOM elements displaying the randomly
    selected movie's information */
function displayInfo() {
  const displayDiv = document.getElementById("result");

  //TODO API request popular movies, get first movie that matches genre id/button clicked

  //TODO call getMovie(selected genre?)
  const movieData = new Map(); //Should prob grab this info from api request instead. Dummy values for test

  movieData.set("Title", "ExampleTitle"); //TODO use loop to set key/value pairs from API request
  movieData.set("Overview", "example text long description lorem ipsum"); //TODO
  movieData.set("Release Date", "2023-06-12"); //TODO

  for (let [key, value] of movieData) {
    let p = document.createElement("p");
    p.setAttribute("id", key); // TODO
    p.innerHTML = key + ": " + value; // TODO

    displayDiv.appendChild(p);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search");
  searchButton.addEventListener("click", () => {
    searchButton.disabled = true; // TODO make new button to reset variables? allow for a new search?
    searchButton.innerHTML = selectedGenre; //TODO change later, here for testing only
    getMovie(selectedGenre);
    displayInfo();
  });
});
