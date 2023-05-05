import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import type { Middleware, StoreEnhancer } from 'redux';
import thunkMiddleware from 'redux-thunk';


import createReducer from './reducers';

function configureAppStore(initialState = {}) {

  // create middlewares
  const middlewares: ReadonlyArray<Middleware<any, any>> = [
    thunkMiddleware
  ];

  // create enhancers
  const enhancers: StoreEnhancer[] = [];

  // create store
  const store = configureStore({
    reducer: createReducer(),
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
      ...middlewares,
    ],
    preloadedState: initialState,
    devTools: true,
    enhancers,
  });

  return store;
}

export const store = configureAppStore();

// A global type to access reducers types
export type RootState = ReturnType<typeof store.getState>;
// Type to access dispatch
export type AppDispatch = typeof store.dispatch; 