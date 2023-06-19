const GENRES = ["action", "comedy", "horror"]; //TODO store genre ID and genre as Map? (from API)
let popularMovies = [];
//TODO implement as a Map instead of Array ???
//  could store Movie object as key, with genreID as value? or the movie's ID?
let selectedGenre;

//TODO consider implementing popularMovies as a weakMap, so when movie is displayed,
//  just setting that object equal to null removes it from the Map!

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
  this.genreIds = genreIds;
  this.length = length;
  this.rating = rating;
  this.description = description;
  this.posterPath = posterPath;
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
function setGenres() {
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
  /* TODO API call to get info. How to pick a movie? Options:
        1) Throw out top trending movie from selected genre?
            -for any subsequent searches, keep going down list?
        2) Randomly generate number from 1-100, use to pick from top 100 movies?
        3) Maybe option to check for this year only vs. all time? */

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

//TODO can refactor code by creating new functions to split this up
//TODO like making functions to get HTML element, and Create HTML elements
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
