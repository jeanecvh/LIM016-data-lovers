import { filterByProducer , filterByDirector } from './data.js';
//import {} from '.data/.js'
// // import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// // import data from './data/rickandmorty/rickandmorty.js';

//console.log(data['films']);



// Event for Nav-Menu responsive

const navToggle = document.querySelector(".NavToggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

// Event for area-label open and close menu

if (navMenu.classList.contains("nav-menu_visible")){
  navToggle.setAttribute("aria-label", "Close menu");
}else {
  navToggle.setAttribute("aria-label", "Open menu")
}
});


let films = data.films;
export const allFilms = data.films;

const filmTitles = films.map((film) => film.title);
const filmPosters = films.map((film) => film.poster);
const filmDate = films.map((film) => film.release_date);
const filmScore = films.map((film) => film.rt_score);
const filmDirector = films.map((film) => film.director);
const filmProducer = films.map((film) => film.producer);
//const top10 = filmScore.sort(function (a,b) {return b - a }).slice(0,10);


//BUCLEANDO PARA CREAR
function allMovies() {
  films = data.films;
  for (let i = 0; i < filmTitles.length; i++) {

    //Creamos el contenedor
    const newMovieCard = document.createElement("div");
    newMovieCard.setAttribute("class", "moviecard contenedor-img ejemplo-1");

    //Creamos el elemento de imagen
    const newMoviePoster = document.createElement("img");
    newMoviePoster.setAttribute("src", filmPosters[i]);
    newMoviePoster.setAttribute("class", "movie-poster");

    //Creamo un div mascara
    const newDivMascara = document.createElement("div");
    newDivMascara.setAttribute("class", "mascara");

    //Creamos el elemento de titulo
    const newMovieTitle = document.createElement("h2");
    const titleText = document.createTextNode(filmTitles[i]);
    newMovieTitle.setAttribute("class", "filmClick");

    // Crear un div para date and year
    const divScoreYear = document.createElement("div");
    divScoreYear.setAttribute("class", "divScoreYear");

    // Creamos p score
    const newMovieScore = document.createElement("p");
    const scoreText = document.createTextNode("⭐️ " + filmScore[i] + " ");
    newMovieScore.setAttribute("class", "scoreClick");

    // Creamos p año
    const newMovieDate = document.createElement("p");
    const dateText = document.createTextNode( "📆 " + filmDate[i]);
    newMovieDate.setAttribute("class", "dateClick");

    // Creamos p director
    const newMovieDirector = document.createElement("p");
    const directorText = document.createTextNode( "Director: " + filmDirector[i]);
    newMovieDirector.setAttribute("class", "directorClick");

    // Creamos p producer
    const newMovieProducer = document.createElement("p");
    const producerText = document.createTextNode( "Producer: " + filmProducer[i]);
    newMovieProducer.setAttribute("class", "producerClick");

    //Unimos los elementos al contenedor
    newMovieTitle.appendChild(titleText);
    divScoreYear.appendChild(scoreText);
    divScoreYear.appendChild(dateText);
    newMovieDirector.appendChild(directorText);
    newMovieProducer.appendChild(producerText);
    newMovieCard.appendChild(newMoviePoster);
    newDivMascara.appendChild(newMovieTitle);
    newDivMascara.appendChild(newMovieScore);
    newDivMascara.appendChild(newMovieDate);
    newDivMascara.appendChild(newMovieDirector);
    newDivMascara.appendChild(newMovieProducer);
    newMovieCard.appendChild(newDivMascara);
    newDivMascara.appendChild(divScoreYear);

    //Ubicamos el contenedor en el DOM
    const newMovieContainer = document.getElementsByClassName("cards_movies")[0];
    newMovieContainer.appendChild(newMovieCard);
    document.getElementsByClassName("moviecard")[i].addEventListener("click", function () {
      window.open("movies.html", "_self");
      //USO LOCALSTORAGE
      localStorage.setItem("identificador", JSON.stringify(films[i]));
    });
  }
}
allMovies();






























/************************* FILTERS **********************/
//FILTER BY DIRECTOR
/*
const filterByDirector = (director, films) => {
  let dataFilter = films.filter(film => film.director == director);
  return dataFilter;
}

const selectDirector = document.querySelector("#directors");


selectDirector.addEventListener("change", () => {
  let director = selectDirector.value;
  if (director == 'directors') {
      allMovies(films);
  } else {
      let dataFilterDirector = filterByDirector(director, films);
      allMovies(dataFilterDirector);
  }
});
*/




/*
//FILTRADO DE DIRECTORES
const directorHayao = document.querySelector("#directorHayao");
const directorIsao = document.querySelector("#directorIsao");
const directorYoshifumi = document.querySelector("#directorYoshifumi");
const directorHiroyuki = document.querySelector("#directorHiroyuki");
const directorGoro = document.querySelector("#directorGoro");
const directorHiromasa = document.querySelector("#directorHiromasa");

function movieCards(filterName) {
  for (let i = 0; i < filterName.length; i++) {
    //Creamos el contenedor
    const newMovieCard = document.createElement("div");
    newMovieCard.setAttribute("class", "moviecard contenedor-img ejemplo-1");
    //Creamos el elemento de imagen
    const newMoviePoster = document.createElement("img");
    newMoviePoster.setAttribute("src", filterName[i].poster);
    newMoviePoster.setAttribute("class", "movie-poster");
*/

    /******* AGREGADO *************/
    //Creamo un div mascara
    /*
    const newDivMascara = document.createElement("div");
    newDivMascara.setAttribute("class", "mascara");


    //Creamos el elemento de titulo
    const newMovieTitle = document.createElement("h2");
    const titleText = document.createTextNode(filterName[i].title);
    newMovieTitle.setAttribute("class", "filmClick");

        // Crear un div para date and year
    const divScoreYear = document.createElement("div");
    divScoreYear.setAttribute("class", "divScoreYear");

    // Creamos p score
    const newMovieScore = document.createElement("p");
    const scoreText = document.createTextNode("⭐️ " + filterName[i].rt_score + " ");
    newMovieScore.setAttribute("class", "scoreClick");

    // Creamos p año
    const newMovieDate = document.createElement("p");
    const dateText = document.createTextNode( "📆 " + filterName[i].release_date);
    newMovieDate.setAttribute("class", "dateClick");

    // Creamos p director
    const newMovieDirector = document.createElement("p");
    const directorText = document.createTextNode( "Director: " + filterName[i].director);
    newMovieDirector.setAttribute("class", "directorClick");

    // Creamos p producer
    const newMovieProducer = document.createElement("p");
    const producerText = document.createTextNode( "Producer: " + filterName[i].producer);
    newMovieProducer.setAttribute("class", "producerClick");

    //Unimos los elementos al contenedor
    newMovieTitle.appendChild(titleText);
    divScoreYear.appendChild(scoreText);
    divScoreYear.appendChild(dateText);
    newMovieDirector.appendChild(directorText);
    newMovieProducer.appendChild(producerText);
    newMovieCard.appendChild(newMoviePoster);
    newDivMascara.appendChild(newMovieTitle);
    newDivMascara.appendChild(newMovieScore);
    newDivMascara.appendChild(newMovieDate);
    newDivMascara.appendChild(newMovieDirector);
    newDivMascara.appendChild(newMovieProducer);
    newMovieCard.appendChild(newDivMascara);
    newDivMascara.appendChild(divScoreYear);
    //Ubicamos el contenedor en el DOM
    const newMovieContainer = document.getElementsByClassName("cards_movies")[0];
    newMovieContainer.appendChild(newMovieCard);
    document.getElementsByClassName("moviecard")[i].addEventListener("click", function () {
      window.open("movies.html", "_self");
      //USO LOCALSTORAGE
      localStorage.setItem("identificador", JSON.stringify(filterName[i]));
    });

function colorFilter() {
  directorHayao.style.color = "whitesmoke";
  directorIsao.style.color = "whitesmoke";
  directorYoshifumi.style.color = "whitesmoke";
  directorHiroyuki.style.color = "whitesmoke";
  directorGoro.style.color = "whitesmoke";
  directorHiromasa.style.color = "whitesmoke";
  producerTakahata.style.color = "whitesmoke";
  producerMiyazaki.style.color = "whitesmoke";
  producerHara.style.color = "whitesmoke";
  producerSuzuki.style.color = "whitesmoke";
  producerNishimura.style.color = "whitesmoke";
}

directorHayao.addEventListener("click", function () {
  colorFilter();
  directorHayao.style.color = "#ffd092";
  document.getElementsByClassName("filteritem")[0].style.display = "none";
  films = filterByDirector(data.films, "Hayao Miyazaki");
  document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
  movieCards(films);
});
directorIsao.addEventListener("click", function () {
  colorFilter();
  directorIsao.style.color = "#ffd092";
  document.getElementsByClassName("filteritem")[0].style.display = "none";
  films = filterByDirector(data.films, "Isao Takahata");
  document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
  movieCards(films);
});
directorYoshifumi.addEventListener("click", function () {
  colorFilter();
  directorYoshifumi.style.color = "#ffd092";
  document.getElementsByClassName("filteritem")[0].style.display = "none";
  films = filterByDirector(data.films, "Yoshifumi Kondō");
  document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
  movieCards(films);
});
directorHiroyuki.addEventListener("click", function () {
  colorFilter();
  directorHiroyuki.style.color = "#ffd092";
  document.getElementsByClassName("filteritem")[0].style.display = "none";
  films = filterByDirector(data.films, "Hiroyuki Morita");
  document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
  movieCards(films);
});
directorGoro.addEventListener("click", function () {
  colorFilter();
  directorGoro.style.color = "#ffd092";
  document.getElementsByClassName("filteritem")[0].style.display = "none";
  films = filterByDirector(data.films, "Gorō Miyazaki");
  document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
  movieCards(films);
});
directorHiromasa.addEventListener("click", function () {
  colorFilter();
  directorHiromasa.style.color = "#ffd092";
  document.getElementsByClassName("filteritem")[0].style.display = "none";
  films = filterByDirector(data.films, "Hiromasa Yonebayashi");
  document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
  movieCards(films);
});

// FILTRADO DE PRODUCTORES
const producerTakahata = document.querySelector("#Takahata");
const producerMiyazaki = document.querySelector("#Miyazaki");
const producerHara = document.querySelector("#Hara");
const producerSuzuki = document.querySelector("#Suzuki");
const producerNishimura = document.querySelector("#Nishimura");

producerTakahata.addEventListener("click", function () {
  colorFilter();
  producerTakahata.style.color = "#ffd092";
  document.getElementsByClassName("filteritem")[1].style.display = "none";
  films = filterByProducer(data.films, "Isao Takahata");
  document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
  movieCards(films);
});
producerMiyazaki.addEventListener("click", function () {
  colorFilter();
  producerMiyazaki.style.color = "#ffd092";
  document.getElementsByClassName("filteritem")[1].style.display = "none";
  films = filterByProducer(data.films, "Hayao Miyazaki");
  document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
  movieCards(films);
});
producerHara.addEventListener("click", function () {
  colorFilter();
  producerHara.style.color = "#ffd092";
  document.getElementsByClassName("filteritem")[1].style.display = "none";
  films = filterByProducer(data.films, "Toru Hara");
  document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
  movieCards(films);
});
producerSuzuki.addEventListener("click", function () {
  colorFilter();
  producerSuzuki.style.color = "#ffd092";
  document.getElementsByClassName("filteritem")[1].style.display = "none";
  films = filterByProducer(data.films, "Toshio Suzuki");
  document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
  movieCards(films);
});
producerNishimura.addEventListener("click", function () {
  colorFilter();
  producerNishimura.style.color = "#ffd092";
  document.getElementsByClassName("filteritem")[1].style.display = "none";
  films = filterByProducer(data.films, "Yoshiaki Nishimura");
  document.getElementsByClassName("cardscontainer")[0].innerHTML = "";
  movieCards(films);
});*/