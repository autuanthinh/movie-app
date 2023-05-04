import { ChangeEventHandler, FC, useCallback, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import './index.scss';

const SearchBox: FC<{}> = () => {
  const [search, setSearch] = useState('');

  const onChangeSearch: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    setSearch(event.target.value);
  }, []);

  return (
    <InputGroup className="search-movie-box">
      <Form.Control value={search} onChange={onChangeSearch} placeholder="Type to search..." />
      <Button variant="outline-secondary">
        <FontAwesomeIcon icon={['fas', 'magnifying-glass']} />
      </Button>
    </InputGroup>
  );
};

export default SearchBox;
