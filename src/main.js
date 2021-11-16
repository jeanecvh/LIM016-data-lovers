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
const top10 = films.filter(films => films.rt_score >= "92")

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
    //Creando el score
    const topScore = document.createElement("p");
    const starScore = document.createElement("img");
    starScore.setAttribute("src", "/src/img/Animaciones/Iconos/Star.png");
    starScore.setAttribute("class", "starScore")
    const scoreText= document.createTextNode(filmScore[i]);
    topScore.setAttribute("class","score");
    //Unimos los elementos al contenedor
    newMovieTitle.appendChild(titleText);
    topScore.appendChild(starScore);
    topScore.appendChild(scoreText);
    newMovieCard.appendChild(newMoviePoster);
    newMovieCard.appendChild(newMovieTitle);
    newMovieCard.appendChild(topScore);
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

/*
function topmovies () {
  films = data.films;
  for (let i = 0; i < filmTitles.length; i++) {
    //if (filmScore >= 100 || filmScore <= 90) {
      //Contenedor de top 10
      const topMovie = document.createElement("div");
      topMovie.setAttribute("class","top-movie-card");
      //Cards (imagenes) de top 10
      const movieTopPoster = document.createElement("img");
      movieTopPoster.setAttribute("src", filmPosters[i]);
      movieTopPoster.setAttribute("class", "poster-top");
      //Titulos de top 10
      const movieTopTittle = document.createElement("p");
      const topTittleText = document.createElement(filmTitles[i]);
      movieTopTittle.setAttribute("class", "filmTittle");
      //Documentos en el DOM
      movieTopTittle.appendChild(topTittleText);
      topMovie.appendChild(movieTopPoster);
      topMovie.appendChild(movieTopTittle);
      //Ubicacion de contenedor de top 10

      const topMovieContainer = document.getElementsByClassName("BoxSliderTop")[0];
      topMovieContainer.appendChild(topMovie);

      document.getElementsByClassName("top-movie-card")[i].addEventListener("click", function () {
        window.open("movies.html", "_self");

        localStorage.setItem("identificador", JSON.stringify(films[i]));
      })
    }
  }
//}

topmovies();
*/

function topmovies() {
  films = data.films;
  //if (filmScore > filmScore) {
  for (let i = 0; i < top10.length; i++) {
    ////if (filmScore >= "92" && filmScore <= "100"){
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
    //Creamos el elemento score
    const topScore = document.createElement("p");
    const scoreText= document.createTextNode(filmScore[i]);
    topScore.setAttribute("class","score");
    //Unimos los elementos al contenedor
    newMovieTitle.appendChild(titleText);
    topScore.appendChild(scoreText)
    newMovieCard.appendChild(newMoviePoster);
    newMovieCard.appendChild(newMovieTitle);
    newMovieCard.appendChild(topScore);
    //Ubicamos el contenedor en el DOM
    const newMovieContainer = document.getElementsByClassName("BoxSliderTop")[0];
    newMovieContainer.appendChild(newMovieCard);

    document.getElementsByClassName("moviecard")[i].addEventListener("click", function () {
      window.open("movies.html", "_self");
      //USO LOCALSTORAGE
      localStorage.setItem("identificador", JSON.stringify(films[i]));
    });
  }
}
//}
topmovies();

