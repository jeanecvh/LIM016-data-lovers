// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// // import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);

const navToggle = document.querySelector(".NavToggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

if (navMenu.classList.contains("nav-menu_visible")){
    navToggle.setAttribute("aria-label", "Cerrar Menú");
}else {
    navToggle.setAttribute("aria-label", "Abrir Menú")
}
});



