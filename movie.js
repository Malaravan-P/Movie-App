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
let hide = document.querySelector('.hide')
let load = document.querySelector('.load');
// load.classList.add('hidden')
hide.classList.remove('hidden')

function searchhome(){
    let inputhome = document.querySelector('#inputhome');
    let query = api + inputhome.value;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
}

function back(){
    hide.classList.remove('hidden')
    load.classList.add('hidden')
}


let bighero =document.querySelector('#bighero');
let toystory =document.querySelector('#toystory');
let monster =document.querySelector('#monster');
let lionking =document.querySelector('#lionking');
let up =document.querySelector('#up');


bighero.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=big hero 6'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

toystory.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=Toy Story'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

monster.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=Monsters, Inc.'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

lionking.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=Lion King'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

up.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=Up'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

let aiw =document.querySelector('#aiw');
let cacw =document.querySelector('#cacw');
let guardians =document.querySelector('#guardians');
let ironman =document.querySelector('#ironman');
let snwh =document.querySelector('#snwh');


aiw.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=Avengers: Infinity War'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

cacw.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=Captain America: Civil War'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

guardians.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=Guardians of the Galaxy'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

ironman.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=Iron Man'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

snwh.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=Spider-Man: No Way Home'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

let as =document.querySelector('#as');
let nayakan =document.querySelector('#nayakan');
let nine =document.querySelector('#nine');
let sp =document.querySelector('#sp');
let thalapathi =document.querySelector('#thalapathi');


as.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=Anbe Sivam'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

nayakan.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=Nayakan'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

nine.addEventListener('click', ()=>{
    api = 'https://omdbapi.com/?apikey=bedbc1c0&t=%2796'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

sp.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=Soorarai Pottru'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

thalapathi.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=Thalapathi'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

let gf =document.querySelector('#gf');
let sr =document.querySelector('#sr');
let sl =document.querySelector('#sl');
let tdk =document.querySelector('#tdk');
let fc =document.querySelector('#fc');


gf.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=The Godfather'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

sr.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=The Shawshank Redemption'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

sl.addEventListener('click', ()=>{
    api = 'https://omdbapi.com/?apikey=bedbc1c0&t=Schindler%27s%20List'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

tdk.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=The Dark Knight'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})

fc.addEventListener('click', ()=>{
    api = 'http://www.omdbapi.com/?apikey=bedbc1c0&t=Fight Club'
    let query = api;
    fetch(query).then(data => data.json()).then(data=>{
        hide.classList.add('hidden');
        load.classList.remove('hidden')

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
    })
})