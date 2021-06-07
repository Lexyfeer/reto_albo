export const GET_FILM_NEWS = 'GET_FILM_NEWS';

export const getFilms = (films) => {
  return {
    type: GET_FILM_NEWS,
    payload: films
  };
};