// // estas funciones son de ejemplo

/************ FILTER BY DIRECTOR *************/
export const filterByDirector = (director, allData) => {
  let dataFilter = allData.filter(film => film.director == director);
  return dataFilter;
}
/************ FILTER BY PRODUCER *************/
export const filterByProducer = (producer, allData) => {
  let dataFilter = allData.filter(film => film.producer == producer);
  return dataFilter;
}

/************ FILTER BY SEARCH *************/
export const filterBySearch = (search, allData) => {
  let searchConverted = search.toLowerCase();
  let dataFilterSearch = allData.filter(film => film.title.toLowerCase().includes(searchConverted));
  return dataFilterSearch;
}

/************ FILTER BY ALFABETIC *************/

export function compareStrings(a, b) {
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


/************ FILTER BY SCORE *************/

export const filterByScore = (rt_score, allData) => {
  let dataFilter = allData.filter(film => film.rt_score == rt_score);
  return dataFilter;
}

/************ FILTER BY YEAR *************/

export const filterByYear = (release_date, allData) => {
  let dataFilter = allData.filter(film => film.release_date == release_date);
  return dataFilter;
}
