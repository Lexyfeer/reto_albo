export const getFilms = (films) => {
  return {
    type: 'GET_ALL_FILMS',
    payload: films
  };
};