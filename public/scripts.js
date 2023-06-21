const GENRES = ["action", "comedy", "horror"]; //TODO store genre ID and genre as Map? (from API)
let popularMovies = [];
let selectedGenre;


/* Combining POSTER_BASE_PATH + posterSizes[i] + movie.posterPath gives link to movie poster */
const POSTER_BASE_PATH = "https://image.tmdb.org/t/p/";
const posterSizes = ["w92", "w154", "w185", "w342", "w500", "w780", "original"];
//TODO FIX THIS; currently just taking index 3, but should be
//  determined based off of user's device somehow?
let properPosterSize = posterSizes[3];

/* Movie Object constructor */
// TODO Make constructor w/ less parameters? like just
//  based off of title or movie identifier number?
function Movie(title, genreIds, runtime, rating, description, posterPath) {
  //TODO save genreIDs and posterPath as Symbols, so they're not accessed by for..in loop looking for
  // elements to add to page later on. Distinguish identifiers from page elements?
  this.title = title;
  this.genreIds = genreIds; // don't display
  this.runtime = runtime;
  this.rating = rating;
  this.description = description;
  this.posterPath = posterPath; // dont display vvv
  this.posterURL = POSTER_BASE_PATH + properPosterSize + this.posterPath;
  //TODO get properties from API?
}

// empty movie object for testing
let movie = new Movie("", [], "", "", "", "");

/* Function to get Genre data through API Fetch request*/
function fetchGenres() {
  // stored as JSON: genres[{'id': 28, 'name': 'Action'}]
}

/* create & fill array/map of all genres (& maybe with corresponding IDs?) */
function setGenres() {//TODO add parameter, should take in whatever fetchGenres returns?
  //TODO change genres to the data from fetch
  const genres = `{"genres": [{"id": 28, "name": "Action" }]}`

  const genresObject = JSON.parse(genres);
  let genreMap = new Map();

  for (const entry of genresObject.genres) {
    genreMap.set(entry.id, entry.name);
  }
}

/* Fetch movie information from The Movie Database API, by most popular */
function fetchPopularMovies(page) {

  //TODO use existing sample movie object
}

/* From a given genre ID number, find & return movie object with matching ID */
function getMovie(genreID) {
  // TODO loop through 20 most popular, returns object of the movie containing
  //  the first equivalent genre-id, IF none found? need to fetch page 2 of popular?
  for (const movie of popularMovies) {
    if (movie.genreIds.includes(genreID)) {//TODO fix condition for another movie of same genre
      return movie;
    }
  }
  //TODO if no movie w matching genre found, search for new results, search more popular movies?
}

/* Find the associated genre ID (int) of the chosen genre (string) from GENRES Map */
function getGenreID(genre) {
  for (const [key, value] of GENRES) {
    if (genre === value) {
      return key;
    }
  }
}

/* When called, this will create new DOM elements displaying the randomly
    selected movie's information */
function displayInfo() {
  const displayDiv = document.getElementById("result");

  //TODO call getMovie(selected genre?)
  for (let key in movie) { //TODO change movie to reference to getMovie(picked genre)
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
      selectedGenre = element.target.value;
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
