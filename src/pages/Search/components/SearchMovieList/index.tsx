import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import * as movieAPI from '@services/movie';
import * as Utils from '@utils/index';
import { useSelector } from 'react-redux';
import { ListMovieBasic, Pagination } from '@apptypes/model';

import { Button, Col, Row, Spinner } from 'react-bootstrap';
import MovieList from '@components/MovieList';

import * as selectors from '@reducers/filter/selectors';

import './index.scss';

const SearchMovieList: FC<{}> = () => {
  const [movies, setMovies] = useState<ListMovieBasic>([]);
  const [pagination, setPagination] = useState<Pagination>(Utils.initPagination());
  const [loading, setLoading] = useState(false);

  const search = useSelector(selectors.searchSelector);
  const year = useSelector(selectors.yearSelector);
  const type = useSelector(selectors.typeSelector);

  const fetchMovie = useCallback(
    _.debounce(async function (
      filter: { search: string; year: string; type: string; page: number; limit: number },
      data: ListMovieBasic = []
    ) {
      try {
        const result = await movieAPI.fetchMovies({
          s: filter.search.trim(),
          y: filter.year,
          type: filter.type,
          page: filter.page,
          limit: filter.limit,
        });

        setMovies([...data, ...result.data]);
        setPagination(result.pagination);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }),
    []
  );

  const fixData = useMemo(() => {
    return {
      search: search.trim(),
      year,
      type,
    };
  }, [search, year, type]);

  const isValid = useMemo(() => {
    if (fixData.search.length < 3) {
      return false;
    }
    return true;
  }, [...Object.values(fixData)]);

  // Reload
  useEffect(() => {
    if (isValid) {
      fetchMovie({ search, year, type, page: 1, limit: pagination.limit });
    }
  }, [isValid, ...Object.values(fixData)]);

  const hasMore = pagination.page < pagination.pages;

  // Load more
  const loadMore = useCallback(() => {
    if (isValid && hasMore) {
      fetchMovie({ search, year, type, page: pagination.page + 1, limit: pagination.limit }, movies);
    }
  }, [isValid, hasMore, pagination, movies, ...Object.values(fixData)]);

  return (
    <>
      <Row className="py-2">
        <Col className="d-flex justify-content-center">Found {pagination.totalResults} result(s)</Col>
      </Row>
      <MovieList movies={movies} />
      <Row>
        <Col className="mt-5 d-flex justify-content-center">
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : hasMore ? (
            <Button onClick={loadMore}>Load More</Button>
          ) : null}
        </Col>
      </Row>
    </>
  );
};

export default SearchMovieList;
