import { FC } from 'react';
import { Card, NavLink } from 'react-bootstrap';
import { NavLink as RNavLink } from 'react-router-dom';
import { MovieBasic } from '@apptypes/model';

import BaseMovieCard from '@components/BaseMovieCard';
import CustomLazyLoadImage from '@components/CustomLazyLoadImage';

import './index.scss';

const MovieCard: FC<{
  movie: MovieBasic;
  showTitle?: boolean;
}> = ({ movie, showTitle = true }) => {
  return (
    <NavLink as={RNavLink} to={`/${movie.imdbID}`} className="movie-card-wrap">
      <BaseMovieCard>
        <CustomLazyLoadImage urlImage={movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : undefined} />
        {showTitle && <Card.Title className="text-center mt-3">{movie.Title}</Card.Title>}
      </BaseMovieCard>
    </NavLink>
  );
};

export default MovieCard;
