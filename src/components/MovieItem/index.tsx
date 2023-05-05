import { ChangeEventHandler, FC, useCallback, useEffect, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchMovies } from '../../services/movie';

// import './index.scss';

const MovieList: FC<{}> = () => {
  const [movies, setSearch] = useState([]);

  // useEffect(() => {
  // }, []);

  // const onChangeSearch: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
  //   setSearch(event.target.value);
  // }, []);

  return (
    <Container className="movie-list">
      <Row>
        {movies.map((movie) => {
          return <Col key={movie}>

          </Col>
        })}
      </Row>
    </Container>
  );
};

export default MovieList;
