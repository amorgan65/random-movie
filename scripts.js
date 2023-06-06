//TODO use javascript to generate genre buttons?
const GENRES = ['action', 'comedy', 'horror']

window.onload = () => {
    var genresDiv = document.getElementById("genres")
    
    GENRES.forEach(genre => {
        const btn = document.createElement("button")
        btn.innerHTML = genre
        genresDiv.appendChild(btn)
    })
}