//TODO get array of genres from API call?
const GENRES = ["action", "comedy", "horror"];

var selectedGenre = "";

window.onload = () => {
  var genresDiv = document.getElementById("genres");

  GENRES.forEach((genre) => {
    const btn = document.createElement("button");
    btn.setAttribute("data-genre", genre);
    btn.innerHTML = genre;
    genresDiv.appendChild(btn);
  });
};

//const container = document.getElementById("genres");
const genreButtons = document.querySelectorAll("[data-genre]");
genreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedGenre = button.innerHTML
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  var searchButton = document.getElementById("search");
  searchButton.addEventListener("click", () => {
    searchButton.innerHTML = selectedGenre;
  });
});

/*
function generateMovie(genre) {
  
} */
//TODO on genre button click, save to variable

/* TODO on search button click, use saved variable for 
    api call? then, dynamically create new page, present
     movie details */
