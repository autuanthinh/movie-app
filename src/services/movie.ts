import { ListMovieBasic, MovieDetails, Pagination } from '@apptypes/model';
import _ from 'lodash';
import queryString from 'query-string';
import * as Utils from '@utils/index';

const apiKey = process.env.REACT_APP_API_KEY as string;
const apiUrl = process.env.REACT_APP_API_URL as string;

function fixParam(param: { [k: string]: any }) {
  const fix = _.pickBy(param, v => {
    if (v === undefined) {
      return false;
    }
    if (typeof v === 'string') {
      return !!v;
    }
    return true;
  });

  return {
    apikey: apiKey,
    ...fix,
  };
}

type SearchMulti = {
  s: string;
  y?: string;
  type?: string;
  page?: number;
  limit?: number;
};
type SearchMultiResponse = {
  data: ListMovieBasic;
  pagination: Pagination;
  success: boolean;
};
export async function fetchMovies({ page = 1, limit = 10, ...param }: SearchMulti): Promise<SearchMultiResponse> {
  const query = queryString.stringify(fixParam({ ...param, page }));
  const response = await fetch(apiUrl + `?${encodeURI(query)}`);
  const responseJson = await response.json();

  // Calculate pagination
  const data = responseJson.Search || [];
  const success = responseJson.Response === 'True';
  const pagination: Pagination = Utils.initPagination({ page, limit });

  // If has data
  if (success) {
    pagination.totalResults = +responseJson.totalResults;
    pagination.pages = Math.ceil(pagination.totalResults / limit);
  }

  return {
    data: data,
    pagination,
    success,
  };
}

type SearchSingle = {
  i?: string;
  t?: string;
  type?: string;
  y?: string;
  plot?: 'short' | 'full';
};
export async function getMovieByID(param: SearchSingle): Promise<MovieDetails | undefined> {
  const query = queryString.stringify(fixParam(param));

  const response = await fetch(apiUrl + `?${encodeURI(query)}`);
  const responseJson = await response.json();

  if (responseJson.Error) {
    return;
  }
  return responseJson;
}
