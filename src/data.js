// // estas funciones son de ejemplo

 export const filterByProducer = (arraytoFilter, filterValue) => {
  const filterResult = arraytoFilter.filter((film) => film.producer === filterValue);
  return filterResult;
};

export const filterByDirector = (arraytoFilter, filterValue) => {
  return arraytoFilter.filter((film) => film.director === filterValue);
};

export const filterBySearch = (search, allData) => {
    let searchConverted = search.toLowerCase();
    let dataFilterSearch = allData.filter(film => film.title.toLowerCase().includes(searchConverted));
    return dataFilterSearch;
}

export const filterByDirector = (director, allData) => {
    let dataFilter = allData.filter(film => film.director == director);
    return dataFilter;
}

export const filterByProducer = (producer, allData) => {
    let dataFilter = allData.filter(film => film.producer == producer);
    return dataFilter;
}



