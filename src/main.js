// import { example } from './data.js';
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

//Importamos la data de Ghibli
let films = data.films;
export const allFilms = data.films;

const filmTitles = films.map((film) => film.title);
const filmPosters = films.map((film) => film.poster);
const filmScore = films.map((film) => film.rt_score);
const top10 = films.sort(function (a,b) {return b.rt_score - a.rt_score }).slice(0,10)

//BUCLEANDO PARA CREAR
function allMovies() {
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
allMovies();


function topmovies() {
  films = data.films;
  //if (filmScore > filmScore) {
  for (let i = 0; i < top10.length; i++) {
    ////if (filmScore >= "92" && filmScore <= "100"){
    //Creamos el contenedor
    const newMovieCard = document.createElement("div");
    newMovieCard.setAttribute("class", "moviecard-top");
    //Creamos el elemento de imagen
    const newMoviePoster = document.createElement("img");
    newMoviePoster.setAttribute("src", filmPosters[i]);
    newMoviePoster.setAttribute("class", "movie-poster-top");
    //Creamos el elemento de titulo
    const newMovieTitle = document.createElement("p");
    const titleText = document.createTextNode(filmTitles[i]);
    newMovieTitle.setAttribute("class", "filmClick-top");
    //Creamos el elemento score
    const topScore = document.createElement("p");
    const starScore = document.createElement("img");
    starScore.setAttribute("src", "/src/img/Animaciones/Iconos/Star.png");
    starScore.setAttribute("class", "starScore")
    const scoreText= document.createTextNode(filmScore[i]);
    topScore.setAttribute("class","score-top");
    //Unimos los elementos al contenedor
    newMovieTitle.appendChild(titleText);
    topScore.appendChild(scoreText);
    topScore.appendChild(starScore);
    newMovieCard.appendChild(newMoviePoster);
    newMovieCard.appendChild(newMovieTitle);
    newMovieCard.appendChild(topScore);
    newMovieCard.appendChild(topScore);
    //Ubicamos el contenedor en el DOM
    const newMovieContainer = document.getElementsByClassName("BoxSliderTop")[0];
    newMovieContainer.appendChild(newMovieCard);

    document.getElementsByClassName("moviecard-top")[i].addEventListener("click", function () {
      window.open("movies.html", "_self");
      //USO LOCALSTORAGE
      localStorage.setItem("identificador", JSON.stringify(films[i]));
    });
  }
}
//}
topmovies();

