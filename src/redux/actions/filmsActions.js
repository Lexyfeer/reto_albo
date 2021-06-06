export const getFilms = (films) => {
  return {
    type: 'GET_FILM_NEWS',
    payload: films
  };
};