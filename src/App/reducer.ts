import { createEntityAdapter, createSlice, Action } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { RootState } from '@store/index';
import { wraperAdapterAction } from '@store/utils';
import type { MovieBasic } from '@apptypes/model';
import type { AdapterAction } from '@apptypes/redux';
import { PersistConfig } from 'redux-persist';

export const reducerName = 'app';

const bookmarkAdapter = createEntityAdapter<MovieBasic>({
  selectId: (item) => item.imdbID,
});
const bookmarkState = bookmarkAdapter.getInitialState({});

// Aggregate adapters
const adaptersState = {
  bookmark: bookmarkState,
};
type AdaptersState = typeof adaptersState;

// Init State
type State = {
  filter: {
    search?: string;
    type?: string;
    year?: string;
  };
} & {
  [k in keyof AdaptersState]: AdaptersState[k];
};

const initialState: State = {
  filter: {
    search: undefined,
    type: undefined,
    year: undefined,
  },
  ...adaptersState,
};

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    addOneBookmark:  ((state, action: AdapterAction<MovieBasic>) => {
      bookmarkAdapter.addOne(state.bookmark, action.payload);
    }),
    removeOneBookmark: wraperAdapterAction('bookmark', bookmarkAdapter.removeOne),
  },
  extraReducers: {},
});

export const reducer = slice.reducer;
export const actions = slice.actions;

export const bookmarkSelectors = bookmarkAdapter.getSelectors((state: RootState) => state[reducerName].bookmark);

export const persistConfig: PersistConfig<State> = {
  key: reducerName,
  storage,
};