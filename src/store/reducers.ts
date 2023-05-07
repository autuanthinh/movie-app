import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import * as bookmarkReducer from '../reducers/bookmark';
import * as filterReducer from '../reducers/filter';

const createReducer = () => {
  const rootReducer = combineReducers({
    [filterReducer.reducerName]: persistReducer(filterReducer.persistConfig, filterReducer.reducer),
    [bookmarkReducer.reducerName]: persistReducer(bookmarkReducer.persistConfig, bookmarkReducer.reducer),
  });

  return rootReducer;
};

export default createReducer;
