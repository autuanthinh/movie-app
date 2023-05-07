import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { PersistConfig } from 'redux-persist';
import { ListMovieBasic } from '@apptypes/model';
import type { RootState } from '@store/index';

import * as enumsAPI from '@services/enums';

export const reducerName = 'filter';

const changeFilter = createAction<{
  search?: string;
  type?: string;
  year?: string;
}>(`${reducerName}/changeFilter`);

const clearFilter = createAction(`${reducerName}/clearFilter`);

const fetchYearOptions = createAsyncThunk<string[]>(`${reducerName}/fetchYearOptions`, async () => {
  const data = await enumsAPI.fetchYears();
  return ['', ...data];
});
const fetchTypeOptions = createAsyncThunk<string[]>(`${reducerName}/fetchTypeOptions`, async () => {
  const data = await enumsAPI.fetchMovieType();
  return ['', ...data];
});

// Init State
type State = {
  yearOptions: string[];
  typeOptions: string[];
  filter: {
    search: string;
    type: string;
    year: string;
  };
  data: {
    entities: ListMovieBasic;
    loading: boolean;
    error?: any;
  };
};

const initialState: State = {
  yearOptions: [],
  typeOptions: [],
  filter: {
    search: '',
    type: '',
    year: '',
  },
  data: {
    entities: [],
    loading: false,
    error: undefined,
  },
};

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(changeFilter, (state, action) => {
        if (action.payload.search !== undefined) {
          state.filter.search = action.payload.search;
        }
        if (action.payload.type !== undefined) {
          state.filter.type = action.payload.type;
        }
        if (action.payload.year !== undefined) {
          state.filter.year = action.payload.year;
        }
      })
      .addCase(clearFilter, state => {
        state.filter.search = '';
        state.filter.type = '';
        state.filter.year = '';
      })
      .addCase(fetchYearOptions.fulfilled, (state, action) => {
        state.yearOptions = action.payload;
      })
      .addCase(fetchTypeOptions.fulfilled, (state, action) => {
        state.typeOptions = action.payload;
      });
  },
});

export const reducer = slice.reducer;
export const actions = {
  ...slice.actions,
  changeFilter,
  clearFilter,
  fetchYearOptions,
  fetchTypeOptions,
};

export const filterSelectors = (state: RootState) => state[reducerName];

export const persistConfig: PersistConfig<State> = {
  key: reducerName,
  storage,
};
