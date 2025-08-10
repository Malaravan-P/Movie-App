let apiBase = 'https://www.omdbapi.com/?apikey=bedbc1c0&t=';

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
    load.classList.add('hidden')
  loadingEl.classList.remove('hidden');
}
function hideLoading() {
    load.classList.remove('hidden')
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



let topviewall = document.querySelector('#topviewall');
let topviewless = document.querySelector('#topviewless');
let toprated = document.querySelector('#toprated');
toprated.classList.add('hidden');
topviewless.classList.add('hidden');

topviewall.addEventListener('click',()=>{

    topviewall.classList.add('hidden','transition-all');
    topviewless.classList.remove('hidden','transition-all');
    toprated.classList.remove('hidden','transition-all');
})

topviewless.addEventListener('click',()=>{
    topviewless.classList.add('hidden','transition-all');
    topviewall.classList.remove('hidden','transition-all');
    toprated.classList.add('hidden','transition-all');
})

let tamilviewall = document.querySelector('#tamilviewall');
let tamilviewless = document.querySelector('#tamilviewless');
let tamil = document.querySelector('#tamil');
tamil.classList.add('hidden');
tamilviewless.classList.add('hidden');

tamilviewall.addEventListener('click',()=>{

    tamilviewall.classList.add('hidden','transition-all');
    tamilviewless.classList.remove('hidden','transition-all');
    tamil.classList.remove('hidden','transition-all');
})

tamilviewless.addEventListener('click',()=>{
    tamilviewless.classList.add('hidden','transition-all');
    tamilviewall.classList.remove('hidden','transition-all');
    tamil.classList.add('hidden','transition-all');
})

let marvelviewall = document.querySelector('#marvelviewall');
let marvelviewless = document.querySelector('#marvelviewless');
let marvel = document.querySelector('#marvel');
marvel.classList.add('hidden');
marvelviewless.classList.add('hidden');

marvelviewall.addEventListener('click',()=>{

    marvelviewall.classList.add('hidden','transition-all');
    marvelviewless.classList.remove('hidden','transition-all');
    marvel.classList.remove('hidden','transition-all');
})

marvelviewless.addEventListener('click',()=>{
    marvelviewless.classList.add('hidden','transition-all');
    marvelviewall.classList.remove('hidden','transition-all');
    marvel.classList.add('hidden','transition-all');
})

let disneyviewall = document.querySelector('#disneyviewall');
let disneyviewless = document.querySelector('#disneyviewless');
let disney = document.querySelector('#disney');
disney.classList.add('hidden');
disneyviewless.classList.add('hidden');

disneyviewall.addEventListener('click',()=>{

    disneyviewall.classList.add('hidden');
    disneyviewless.classList.remove('hidden');
    disney.classList.remove('hidden');
})

disneyviewless.addEventListener('click',()=>{
    disneyviewless.classList.add('hidden');
    disneyviewall.classList.remove('hidden');
    disney.classList.add('hidden');
})