//TODO get array of genres from API call?
const GENRES = ["action", "comedy", "horror"];

var selectedGenre = "";

window.onload = () => {
  var genresDiv = document.getElementById("genres");

  GENRES.forEach((genre) => {
    const btn = document.createElement("button");
    btn.innerHTML = genre;
    genresDiv.appendChild(btn);
  });
};

//TODO on genre button click, save to variable

/* TODO on search button click, use saved variable for 
    api call? then, dynamically create new page, present
     movie details */