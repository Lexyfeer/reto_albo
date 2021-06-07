import { combineReducers } from 'redux';
import { newsFilmsReducer } from './newsFilmsReducer';
import { postReducer } from './postReducer';

const reducers = combineReducers({
  allFilms: newsFilmsReducer,
  allPosts: postReducer
});

export default reducers;