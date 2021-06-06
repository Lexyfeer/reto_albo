import { combineReducers } from 'redux';
import { newsFilmsReducer } from './newsFilmsReducer';

const reducers = combineReducers({
  allFilms: newsFilmsReducer,
});

export default reducers;