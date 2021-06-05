import { combineReducers } from 'redux';
import { filmsReducer } from './filmsReducers';

const reducers = combineReducers({
  allFilms: filmsReducer,
});

export default reducers;