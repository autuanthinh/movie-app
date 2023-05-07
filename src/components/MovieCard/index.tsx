import { FC } from 'react';
import { Card, NavLink } from 'react-bootstrap';
import { NavLink as RNavLink } from 'react-router-dom';
import { MovieBasic } from '@apptypes/model';
import { motion } from 'framer-motion';

import CustomLazyLoadImage from '@components/CustomLazyLoadImage';

import './index.scss';

const MovieCard2: FC<{
  movie: MovieBasic;
  showTitle?: boolean;
}> = ({ movie, showTitle = true }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 40,
      }}
      className="movie-card-wrap"
    >
      <NavLink as={RNavLink} to={`/${movie.imdbID}`}>
        <Card className="movie-card">
          <Card.Body>
            <CustomLazyLoadImage urlImage={movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : undefined} />
            {showTitle && <Card.Title className="text-center mt-3">{movie.Title}</Card.Title>}
          </Card.Body>
        </Card>
      </NavLink>
    </motion.div>
  );
};

export default MovieCard2;
