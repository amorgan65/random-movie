const express = require('express');

const app = express();

app.use(express.static('public'));

//serve the main webpage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//get movie data based off genre and current page number
app.get('/movies', (req, res) => {
    // TODO  res.send(correct Movie Object)
});