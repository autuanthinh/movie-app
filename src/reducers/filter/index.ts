import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { PersistConfig } from 'redux-persist';
import { ListMovieBasic } from '@apptypes/model';
import type { RootState } from '@store/index';

import * as movieAPI from '@services/movie';
import * as enumsAPI from '@services/enums';

export const reducerName = 'filter';

const changeSearch = createAction<string>(`${reducerName}/search`);
const changeType = createAction<string>(`${reducerName}/type`);
const changeYear = createAction<string>(`${reducerName}/year`);

const clearFilter = createAction(`${reducerName}/clearFilter`);

const fetchYearOptions = createAsyncThunk<string[]>(`${reducerName}/fetchYearOptions`, async () => {
  const data = await enumsAPI.fetchYears();
  return ['', ...data]
});
const fetchTypeOptions = createAsyncThunk<string[]>(`${reducerName}/fetchTypeOptions`, async () => {
  const data = await enumsAPI.fetchMovieType();
  return ['', ...data]
});

const fetchMovie = createAsyncThunk<ListMovieBasic, void, { state: RootState }>(
  `${reducerName}/fetchMovie`,
  async (__, { getState }) => {
    const { search, type, year } = getState().filter.filter;

    const response = await movieAPI.fetchMovies({
      search: search?.trim(),
      type: type,
      year: year,
    });

    return response;
  }
);

// Init State
type State = {
  yearOptions: string[],
  typeOptions: string[],
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
      .addCase(changeSearch, (state, action) => {
        state.filter.search = action.payload;
      })
      .addCase(changeType, (state, action) => {
        state.filter.type = action.payload;
      })
      .addCase(changeYear, (state, action) => {
        state.filter.year = action.payload;
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
      })
      .addCase(fetchMovie.pending, state => {
        state.data.entities = [];
        state.data.loading = true;
        state.data.error = undefined;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.data.entities = action.payload;
        state.data.loading = false;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.data.loading = false;
        state.data.error = action.error;
      });
  },
});

export const reducer = slice.reducer;
export const actions = {
  ...slice.actions,
  changeSearch,
  changeType,
  changeYear,
  clearFilter,
  fetchYearOptions,
  fetchTypeOptions,
  fetchMovie,
};

export const filterSelectors = (state: RootState) => state[reducerName];

export const persistConfig: PersistConfig<State> = {
  key: reducerName,
  storage,
};
