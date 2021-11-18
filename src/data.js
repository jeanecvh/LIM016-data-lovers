// // estas funciones son de ejemplo

 export const filterByProducer = (arraytoFilter, filterValue) => {
  const filterResult = arraytoFilter.filter((film) => film.producer === filterValue);
  return filterResult;
};

export const filterByDirector = (arraytoFilter, filterValue) => {
  return arraytoFilter.filter((film) => film.director === filterValue);
};



