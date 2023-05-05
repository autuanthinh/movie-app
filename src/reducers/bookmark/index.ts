import { createEntityAdapter, createSlice, Action } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { RootState } from '@store/index';
import type { MovieBasic } from '@apptypes/model';
import { PersistConfig } from 'redux-persist';

export const reducerName = 'bookmark';

const bookmarkAdapter = createEntityAdapter<MovieBasic>({
  selectId: (item) => item.imdbID,
});

const slice = createSlice({
  name: reducerName,
  initialState: bookmarkAdapter.getInitialState({}),
  reducers: {
    addOne:  bookmarkAdapter.addOne,
    removeOne: bookmarkAdapter.removeOne,
    removeAll: bookmarkAdapter.removeAll,
  },
  extraReducers: {},
});

export const reducer = slice.reducer;
export const actions = slice.actions;

export const persistConfig: PersistConfig<ReturnType<typeof slice.getInitialState>> = {
  key: reducerName,
  storage,
};

export const bookmarkSelectors = bookmarkAdapter.getSelectors((state: RootState) => state[reducerName]);

export const selectors = {
    bookmarkList: bookmarkSelectors.selectAll
}