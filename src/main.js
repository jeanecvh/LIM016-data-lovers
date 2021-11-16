// import { example } from './data.js';
//import {} from '.data/.js'
// // import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// // import data from './data/rickandmorty/rickandmorty.js';

// console.log(data['films']);

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
// let films = data.films;
// export const allFilms = data.films;

// const filmTitles = films.map((film) => film.title);
// const filmPosters = films.map((film) => film.poster);

// //BUCLEANDO PARA CREAR
// function allMovies() {
//   films = data.films;
//   for (let i = 0; i < filmTitles.length; i++) {
//     //Creamos el contenedor
//     const newMovieCard = document.createElement("div");
//     newMovieCard.setAttribute("class", "moviecard ");
//     //Creamos el elemento de imagen
//     const newMoviePoster = document.createElement("img");
//     newMoviePoster.setAttribute("src", filmPosters[i]);
//     newMoviePoster.setAttribute("class", "movie-poster");
//     //Creamos el elemento de titulo
//     const newMovieTitle = document.createElement("p");
//     const titleText = document.createTextNode(filmTitles[i]);
//     newMovieTitle.setAttribute("class", "filmClick");
//     //Unimos los elementos al contenedor
//     newMovieTitle.appendChild(titleText);
//     newMovieCard.appendChild(newMoviePoster);
//     newMovieCard.appendChild(newMovieTitle);
//     //Ubicamos el contenedor en el DOM
//     const newMovieContainer = document.getElementsByClassName("cards_movies")[0];
//     newMovieContainer.appendChild(newMovieCard);

//     document.getElementsByClassName("moviecard")[i].addEventListener("click", function () {
//       window.open("movies.html", "_self");
//       //USO LOCALSTORAGE
//       localStorage.setItem("identificador", JSON.stringify(films[i]));
//     });
//   }
// }
// allMovies();


let films = data.films;
export const allFilms = data.films;

const filmTitles = films.map((film) => film.title);
const filmPosters = films.map((film) => film.poster);
const filmDate = films.map((film) => film.release_date);
const filmScore = films.map((film) => film.rt_score);
const filmDirector = films.map((film) => film.director);
const filmProducer = films.map((film) => film.producer)

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

    // Creamos p score
    const newMovieScore = document.createElement("p");
    const scoreText = document.createTextNode(filmScore[i]);
    newMovieScore.setAttribute("class", "scoreClick");

    // Creamos p año 
    const newMovieDate = document.createElement("p");
    const dateText = document.createTextNode(filmDate[i]);
    newMovieDate.setAttribute("class", "dateClick");

    // Creamos p director
    const newMovieDirector = document.createElement("p");
    const directorText = document.createTextNode(filmDirector[i]);
    newMovieDirector.setAttribute("class", "directorClick");

    // Creamos p producer
    const newMovieProducer = document.createElement("p");
    const producerText = document.createTextNode(filmProducer[i]);
    newMovieProducer.setAttribute("class", "producerClick");


    //Unimos los elementos al contenedor
    newMovieTitle.appendChild(titleText);
    newMovieScore.appendChild(scoreText);
    newMovieDate.appendChild(dateText);
    newMovieDirector.appendChild(directorText);
    newMovieProducer.appendChild(producerText);

    newMovieCard.appendChild(newMoviePoster);

    newDivMascara.appendChild(newMovieTitle);
    newDivMascara.appendChild(newMovieScore);
    newDivMascara.appendChild(newMovieDate);
    newDivMascara.appendChild(newMovieDirector);
    newDivMascara.appendChild(newMovieProducer);

    newMovieCard.appendChild(newDivMascara);
    

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
