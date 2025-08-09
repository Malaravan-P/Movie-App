let apiBase = 'http://www.omdbapi.com/?apikey=bedbc1c0&s=';

let title = document.querySelector('#title');
let description = document.querySelector('#plot');
let director = document.querySelector('#director');
let duration = document.querySelector('#runtime');
let released = document.querySelector('#released');
let genre = document.querySelector('#genre');
let rating = document.querySelector('#rating');
let poster = document.querySelector('#poster');
let actors = document.querySelector('#actorName');
let language = document.querySelector('#language')
let country = document.querySelector('#country')
let writers = document.querySelector('#writers')
let hide = document.querySelector('.hide')
let load = document.querySelector('.load');
load.classList.add('hidden')
hide.classList.remove('hidden')

function searchhome(){
    let inputhome = document.querySelector('#inputhome').value.trim();
    if (inputhome) {
        fetchMovie(apiBase + inputhome);
    }
}
const loadingEl = document.getElementById('loading');

function showLoading() {
  loadingEl.classList.remove('hidden');
}
function hideLoading() {
  loadingEl.classList.add('hidden');
}
async function fetchMovie(query) {
    hide.classList.add('hidden');
    load.classList.remove('hidden');

    try {
        showLoading();
        let res = await fetch(query);
        let data = await res.json();

        title.innerText = data.Title;
        description.innerText = data.Plot;
        director.innerText = data.Director;
        duration.innerText = data.Runtime;
        released.innerText = data.Released;
        genre.innerText = data.Genre;
        rating.innerText = data.imdbRating;
        poster.src = data.Poster;
        actors.innerText = data.Actors;
        writers.innerText = data.Writer;
        language.innerText = data.Language;
        country.innerText = data.Country;
    } catch (err) {
        console.error("Error fetching data:", error);
        alert("Something went wrong.");
    }finally {
        hideLoading();
    }
}

document.querySelectorAll('[data-movie]').forEach(btn => {
    btn.addEventListener('click', () => {
        let movie = btn.dataset.movie;
        fetchMovie(apiBase + movie);
    });
});

function back(){
    hide.classList.remove('hidden')
    load.classList.add('hidden')
}

