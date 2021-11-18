//import { filterByProducer , filterByDirector } from './data.js';
//import {} from '.data/.js'
// // import data from './data/lol/lol.js';
// import data from './data/ghibli/ghibli.js';
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
//
/*******************
 function openPage (pageName,elmnt,color) {
  var i, Box, BoxNavs;
  Box = document.getElementsByClassName("Box");
  for (i = 0; i < Box.length; i++) {
    Box[i].style.display = "none";
  }
  BoxNavs = document.getElementsByClassName("BoxNavs");
  for (i = 0; i < BoxNavs.length; i++) {
    BoxNavs[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
openPage('Home', this,'rgb(12 46 45 / 0%)');
openPage('AboutUs', this,'rgb(12 46 45 / 0%)');
openPage('Films', this,' rgb(12 46 45 / 0%)');
openPage('Awards', this, 'rgb(12 46 45 / 0%)');
openPage('Statistics', this,' rgb(12 46 45 / 0%)');
openPage('Games', this, 'rgb(12 46 45 / 0%)');

document.getElementById("OpenDefault").click()
*/

/**** SLIDER ******/


/********** DATA FILTER***********/
import dataGhibli from './data/ghibli/ghibli.js';
import { /*filterBySearch,*/ filterByDirector, filterByProducer, order_az, order_za} from './data.js';
// TEMPLATE
const allData = dataGhibli.films;

//PAGE FILM-2

//const mainCards = document.querySelector("#Films");

const showData = (data) => {
    const cardElement = document.createElement('div');
    cardElement.className = "card";

    const templateCard =
      `<div class="moviecard contenedor-img ejemplo-1" id="${data.id}">
        <img class="movie-poster" src="${data.poster}">
        <div class="mascara">
          <h2 class="filmClick">${data.title}</h2>
            <div class="divScoreYear" >
                <p class="scoreClick"> ⭐️ ${data.rt_score}</p>
                <p class="dateClick"> 📆 ${data.release_date}</p>
            </div>
            <p class="directorClick">Director: ${data.director}</p>
            <p class="producerClick">Producer: ${data.producer}</p>
            </div>
        </div>`;

    cardElement.innerHTML = templateCard;
    cardElement.addEventListener('click', () => {
        //let id = cardElement.firstChild.id;
        //showMore(id);
    })
    return cardElement;
}

const cardsList = document.querySelector("#cards_movies");
const selectDirector = document.querySelector("#directors");
const selectProducer = document.querySelector("#producers");
const inputTypeSearch = document.querySelector("input[type=search]");
const ghibliNotFound = document.querySelector("#ghibli-notFound");
//let inputSearch = document.querySelector("#search");


// Funcion Cargar Data en Card
function loadData(data) {
    cardsList.innerHTML = '';
    for (let key in data) {
        cardsList.appendChild(showData(data[key]));
    }
}

// Cargar Toda la Data al inicio
window.addEventListener("load", () => {
    loadData(allData);
});

document.getElementById('myInput').addEventListener('keyup', function () {
    var input, filter, div, movieposter, h2, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementsByClassName("moviecard");
    movieposter = document.getElementsByClassName("movie-poster");
      for (i = 0; i < movieposter.length; i++) {
        h2 = div[i].getElementsByClassName("filmClick")[0];
        if (h2) {
          if (h2.innerHTML.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
          } else {
            div[i].style.display = "none";
          }
        }

    }
})

//Volver a cargar toda la Data cuando haga click en la x interna de un input de tipo search
inputTypeSearch.addEventListener('search', () => {
  loadData(allData);
  ghibliNotFound.style.display = 'none';
});

//Filtrar Data por Search

/*inputSearch.addEventListener('keyup', () => {
    let search = inputSearch.value;
    ghibliNotFound.style.display = 'none';
    if (search.length == 0) {
        loadData(allData);
    } else {
        let dataFilterSearch = filterBySearch(search, allData);
        if (dataFilterSearch.length == 0) {
            cardsList.innerHTML = '';
            ghibliNotFound.style.display = 'block';
        } else {
            loadData(dataFilterSearch);
        }
    }
});*/



// Filtrar Data por Director
selectDirector.addEventListener("change", () => {
    let director = selectDirector.value;
    if (director == 'directors') {
        loadData(allData);
    } else {
        let dataFilterDirector = filterByDirector(director, allData);
        loadData(dataFilterDirector);
    }
});

// Filtrar Data por Productor
selectProducer.addEventListener("change", () => {
    let producer = selectProducer.value;
    if (producer == 'producers') {
        loadData(allData);
    } else {
        let dataFilterProducer = filterByProducer(producer, allData);
        loadData(dataFilterProducer);
    }
});

let orderAtoZ = document.getElementById("order_az");
orderAtoZ.addEventListener("click", function () {
  document.getElementsByClassName("cards_movies")[0].innerHTML = "";
  order_az(allData);
  loadData(allData);
});

let orderZtoA = document.getElementById("order_za");
orderZtoA.addEventListener("click", function () {
  document.getElementsByClassName("cards_movies")[0].innerHTML = "";
  order_za(allData);
  loadData(allData);
});

// let films = data.films;
// export const allFilms = data.films;

// const filmTitles = films.map((film) => film.title);
// const filmPosters = films.map((film) => film.poster);
// const filmDate = films.map((film) => film.release_date);
// const filmScore = films.map((film) => film.rt_score);
// const filmDirector = films.map((film) => film.director);
// const filmProducer = films.map((film) => film.producer);
// //const top10 = filmScore.sort(function (a,b) {return b - a }).slice(0,10);



















