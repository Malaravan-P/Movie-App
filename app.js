let api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=';

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
let main = document.querySelector('.main');
let sub = document.querySelector('.sub');
main.classList.add('hidden')

const loadingEl = document.getElementById('loading');

function showLoading() {
  loadingEl.classList.remove('hidden');
}
function hideLoading() {
  loadingEl.classList.add('hidden');
}
async function search(){
    let input = document.querySelector('#input');
    let query = api + input.value;
    try {
        showLoading();
        let res = await fetch(query);
        let data = await res.json();
        
        if (data.Response === "False") {
            alert("Movie not found!");
            return;
        }

        main.classList.remove('hidden');
        sub.classList.add('hidden');

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
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Something went wrong.");
    }finally {
        hideLoading();
    }
}
