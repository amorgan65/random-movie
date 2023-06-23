const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//serve the main webpage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//get movie data based off genre and current page number
app.get('/movies', (req, res) => {
    // TODO use Request object to read in the Genre to use in Query
    // TODO Use Response object to send the Movie object res.send(correct Movie Object)
    const genre = req.body;

    let selectedGenreID = getGenreID(genre.name);
    let validMovie = getMovie(selectedGenreID);

    res.send(validMovie);
});

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