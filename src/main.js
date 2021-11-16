// import { example } from './data.js';
//import {} from '.data/.js'
// // import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// // import data from './data/rickandmorty/rickandmorty.js';

console.log(data['films']);

/******** RESPONSIVE ************/

const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

if (navMenu.classList.contains("nav-menu_visible")){
    navToggle.setAttribute("aria-label", "Close menu");
}else {
    navToggle.setAttribute("aria-label", "Open menu")
}
});


/********* DATA **********/
export const objetfilms = data.films;

let films = data.films;

const filmTitles = films.map((film) => film.title);
const filmPosters = films.map((film) => film.poster);

function printAllMovies() {
  films = data.films;
  for (let i = 0; i < filmTitles.length; i++) {
    //Creamos el contenedor
    const newMovieCard = document.createElement("div");
    newMovieCard.setAttribute("class", "moviecard");
    //Creamos el elemento de imagen
    const newMoviePoster = document.createElement("img");
    newMoviePoster.setAttribute("src", filmPosters[i]);
    newMoviePoster.setAttribute("class", "movie-poster");
    //Creamos el elemento de titulo
    const newMovieTitle = document.createElement("p");
    const titleText = document.createTextNode(filmTitles[i]);
    newMovieTitle.setAttribute("class", "filmClick");
    //Unimos los elementos al contenedor
    newMovieTitle.appendChild(titleText);
    newMovieCard.appendChild(newMoviePoster);
    newMovieCard.appendChild(newMovieTitle);
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
printAllMovies();




