import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from 'react-bootstrap';
import FilterBar from '@pages/Search/components/FilterBar';
import SearchMovieList from '@pages/Search/components/SearchMovieList';

import { actions } from '@reducers/filter';

import './index.scss';

function SearchPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(actions.clearFilter());
    };
  }, []);

  return (
    <Container className="search-page my-4">
      <FilterBar />
      <SearchMovieList />
    </Container>
  );
}

export default SearchPage;
