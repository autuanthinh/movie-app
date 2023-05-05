import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import * as appReducer from '../App/reducer';
import * as bookmarkReducer from '../reducers/bookmark';
import * as filterReducer from '../reducers/filter';

const createReducer = () => {
  const rootReducer = combineReducers({
    [filterReducer.reducerName]: persistReducer(filterReducer.persistConfig, filterReducer.reducer),
    [bookmarkReducer.reducerName]: persistReducer(bookmarkReducer.persistConfig, bookmarkReducer.reducer),
    [appReducer.reducerName]: persistReducer(appReducer.persistConfig, appReducer.reducer),
  });

  return rootReducer;
};

export default createReducer;
