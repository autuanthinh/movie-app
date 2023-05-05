import { ChangeEventHandler, FC, KeyboardEventHandler, useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as selectors from '@reducers/filter/selectors';
import { actions } from '@reducers/filter';

// import './index.scss';

const SearchBox: FC<{}> = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const navigation = useNavigation();

  const year = useSelector(selectors.searchSelector);

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(value);
  }, [year]);

  const onSearch = useCallback(
    // Prevent multi action
    _.debounce(function () {
      dispatch(actions.changeSearch(value));

      if (navigation.location?.pathname !== '/search') {
        navigate('/search');
      }
    }, 1000),
    []
  );

  const onChangeValue: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    setValue(event.target.value);
  }, []);

  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = useCallback(
    event => {
      if (event.key === 'Enter') {
        onSearch();
      }
    },
    [onSearch]
  );

  return (
    <InputGroup className="search-movie-box">
      <Form.Control value={value} onChange={onChangeValue} onKeyPress={onKeyPress} placeholder="Type to search..." />
      <Button variant="outline-secondary" onClick={onSearch}>
        <FontAwesomeIcon icon={['fas', 'magnifying-glass']} />
      </Button>
    </InputGroup>
  );
};

export default SearchBox;
