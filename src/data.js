// // estas funciones son de ejemplo
/*export const filterBySearch = (search, allData) => {
    let searchConverted = search.toLowerCase();
    let dataFilterSearch = allData.filter(film => film.title.toLowerCase().includes(searchConverted));
    return dataFilterSearch;
}*/

export const filterByDirector = (director, allData) => {
    let dataFilter = allData.filter(film => film.director == director);
    return dataFilter;
}

export const filterByProducer = (producer, allData) => {
    let dataFilter = allData.filter(film => film.producer == producer);
    return dataFilter;
}

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

export const order_az = (arraytosort) => {
  return arraytosort.sort(function(a, b) {
    return compareStrings(a.title, b.title);
})
};

export const order_za = (arraytosort) => {
  return arraytosort.sort(function(a, b) {
    return compareStrings(b.title, a.title);
})
};


