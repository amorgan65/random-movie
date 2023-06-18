const GENRES = ["action", "comedy", "horror"]; //TODO store genre ID and genre as Map? (from API)
let popularMovies = [];

let selectedGenre;

/* Combining POSTER_BASE_PATH + posterSizes[i] + movie.posterPath gives link to movie poster */
const POSTER_BASE_PATH = "https://image.tmdb.org/t/p/";
const posterSizes = ["w92", "w154", "w185", "w342", "w500", "w780", "original"];

//TODO get properties from API?
let movie = {
  title: "", // property from request: 'original_title'
  genreIds: [], // 'genre_ids'
  length: "", // to get this, separate API request from movies ID, get movie details, 'runtime'
  rating: "", // 'vote_average'
  description: "", // 'overview'
  posterPath: POSTER_BASE_PATH + posterSizes[3] + "", // 'poster_path' 

};

/* Function to get Genre data through API Fetch request*/
function fetchGenres() {
  // stored as JSON: genres[{'id': 28, 'name': 'Action'}]
}

/* create & fill array/map of all genres (& maybe with corresponding IDs?) */
function setGenres() {

}

/* Fetch movie information from The Movie Database API, by most popular */
function fetchPopularMovies(page) {
  /* TODO API call to get info. How to pick a movie? Options:
        1) Throw out top trending movie from selected genre?
            -for any subsequent searches, keep going down list?
        2) Randomly generate number from 1-100, use to pick from top 100 movies?
        3) Maybe option to check for this year only vs. all time? */
}

/* From a given genre, as String (ID number?), find & return movie object with matching ID */
function getMovie(genre) {
  // TODO loop through 20 most popular, returns object of the movie containing
  //  the first equivalent genre-id, IF none found? need to fetch page 2 of popular?


}

/* When called, this will create new DOM elements displaying the randomly
    selected movie's information */
function displayInfo() {
  const displayDiv = document.getElementById("result");

  //TODO call getMovie(selected genre?)
  for (let key in movie) {
    if (key === 'posterPath') {
      let img = document.createElement('img');
      img.setAttribute('src', movie[key]);

      displayDiv.appendChild(img);
    } else {
      let p = document.createElement('p');
      p.setAttribute('id', key); // TODO need to fix data before display? Capitalize, spacing
      p.innerHTML = key + ": " + movie[key];

      displayDiv.appendChild(p);
    }
  }
}

window.onload = () => {
  let genresDiv = document.getElementById("genres");

  GENRES.forEach((genre) => {
    const btn = document.createElement("button");

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

window.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search");
  searchButton.addEventListener("click", () => {
    searchButton.disabled = true; // TODO make new button to reset variables? allow for a new search?
    searchButton.innerHTML = selectedGenre; //TODO change later, here for testing only
    getMovie(selectedGenre);
    displayInfo();
  });
});
