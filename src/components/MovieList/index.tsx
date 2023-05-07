import { FC } from 'react';
import { ListMovieBasic, MovieBasic } from '@apptypes/model';
import { Col, Row } from 'react-bootstrap';
import MovieCard from '@components/MovieCard';

import './index.scss';

export type TopIcons = {
  key: string;
  Component: FC<{
    onClick?: () => void;
  }>;
  action?: (movie: MovieBasic) => void;
}[];

const MovieList: FC<{
  movies: ListMovieBasic;
  topIcons?: TopIcons;
}> = ({ movies, topIcons }) => {
  return (
    <Row md={3} xs={1} lg={4} className="movie-list g-4">
      {movies.map(movie => {
        return (
          <Col key={movie.imdbID} className="movie-list__item">
            <MovieCard movie={movie} />
            {topIcons !== undefined && topIcons.length > 0 ? (
              <div className="top-icons">
                {topIcons.map(icon => {
                  return <icon.Component key={icon.key} onClick={() => icon.action?.(movie)} />;
                })}
              </div>
            ) : null}
          </Col>
        );
      })}
    </Row>
  );
};

export default MovieList;
