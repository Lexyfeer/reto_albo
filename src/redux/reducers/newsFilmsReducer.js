import { GET_FILM_NEWS } from '../actions/filmsActions';

const initialState = {
  films: [],
};


export const newsFilmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILM_NEWS:
      return { ...state, films: action.payload };

    default:
      return state;
  }
};

