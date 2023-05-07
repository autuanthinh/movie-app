import { ChangeEventHandler, FC, KeyboardEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import _ from 'lodash';

import * as movieAPI from '@services/movie';

import { NavLink, useNavigate, useNavigation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ListMovieBasic } from '@apptypes/model';

import { Button, Form, InputGroup, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as selectors from '@reducers/filter/selectors';
import { actions } from '@reducers/filter';

import './index.scss';

const SearchBox: FC<{}> = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const navigation = useNavigation();

  const search = useSelector(selectors.searchSelector);

  const [value, setValue] = useState('');
  const [oldValue, setOldValue] = useState<string | undefined>();
  const [movies, setMovies] = useState<ListMovieBasic>([]);
  const [loading, setLoading] = useState(false);

  const [focusInput, setFocusInput] = useState(false);
  const hoverMenuRef = useRef<boolean>(false);

  useEffect(() => {
    setValue(search);
  }, [search]);

  const onSearchOrNavigate = useCallback(
    // Prevent multi action
    _.debounce(function () {
      if (navigation.location?.pathname !== '/search') {
        if (search !== value) {
          dispatch(actions.changeFilter({ search: value, year: '', type: '' }));
        }
        navigate('/search');
      } else {
        dispatch(actions.changeFilter({ search: value }));
      }
    }, 500),
    [value]
  );

  const onChangeValue: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    setValue(event.target.value);
    setFocusInput(true);
  }, []);

  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = useCallback(
    event => {
      if (event.key === 'Enter') {
        onSearchOrNavigate();
        setFocusInput(false);
      }
    },
    [onSearchOrNavigate, search]
  );

  const fetchMovie = useCallback(
    _.debounce(async function (search: string) {
      try {
        const result = await movieAPI.fetchMovies({ s: search });
        setMovies(result.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }),
    []
  );

  const fixedSearch = value.trim();
  const displayDropdownMenu = focusInput && fixedSearch.length >= 3;

  useEffect(() => {
    if (focusInput && fixedSearch.length >= 3 && fixedSearch !== oldValue) {
      setLoading(true);
      setOldValue(fixedSearch);
      fetchMovie(fixedSearch);
    }
  }, [fixedSearch, focusInput]);

  const onClickItem = useCallback(() => {
    hoverMenuRef.current = false;
    setFocusInput(false);
    setValue('');
  }, []);

  return (
    <Dropdown show={displayDropdownMenu} className="search-movie-box-wrap">
      <Dropdown.Toggle as="div">
        <InputGroup className="search-movie-box">
          <Form.Control
            value={value}
            onChange={onChangeValue}
            onKeyPress={onKeyPress}
            placeholder="Type at least 3 letters to search..."
            onFocus={() => setFocusInput(true)}
            onBlur={() => {
              if (!hoverMenuRef.current) {
                setFocusInput(false);
              }
            }}
          />
          <Button variant="outline-secondary" onClick={onSearchOrNavigate}>
            <FontAwesomeIcon icon={['fas', 'magnifying-glass']} />
          </Button>
        </InputGroup>
      </Dropdown.Toggle>
      <Dropdown.Menu
        onMouseEnter={() => (hoverMenuRef.current = true)}
        onMouseLeave={() => (hoverMenuRef.current = false)}
      >
        {loading ? (
          <Dropdown.Item>Loading...</Dropdown.Item>
        ) : movies.length === 0 ? (
          <Dropdown.Item>Movie not found!</Dropdown.Item>
        ) : (
          <>
            {movies.map(m => {
              return (
                <Dropdown.Item as={NavLink} key={m.imdbID} to={`/${m.imdbID}`} onClick={onClickItem}>
                  {m.Title}
                </Dropdown.Item>
              );
            })}
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBox;
