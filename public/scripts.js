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
    //  TODO maybe pass in element, and set genre value
    //      to search button?, then use that to pass to GET request for movie data?

    searchButton.disabled = true; // TODO make new button to reset variables? allow for a new search?
    searchButton.innerHTML = selectedGenre; //TODO change later, here for testing only

    const request = new Request("/movies", {
      method: "GET",
      body: `{"name": ${selectedGenre}}`,
    });

    fetch(request)
        .then((response) => {
          if (response.status === 200) {
            return response.json(); //TODO maybe don't return, instead turn this into object? or save as const to access?
          } else {
            throw new Error("Something went wrong on the backend server");
          }
        })
        .catch((error) => {
          console.log(error);
        });

    displayInfo();
  });
});
