import { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieBasic } from '@apptypes/model';

import MovieList, { TopIcons } from '@components/MovieList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { selectors, actions } from '@reducers/bookmark';

import './index.scss';

const BookmarkMovieList: FC<{}> = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectors.bookmarkList);

  const topIcons = useMemo<TopIcons>(() => {
    return [
      {
        key: 'remove',
        Component: ({ onClick }: any) => (
          <OverlayTrigger placement={'bottom-end'} overlay={<Tooltip>Remove from bookmark</Tooltip>}>
            <FontAwesomeIcon icon={['fas', 'trash']} onClick={onClick} />
          </OverlayTrigger>
        ),
        action: (movie: MovieBasic) => {
          dispatch(actions.removeOne(movie.imdbID));
        },
      },
    ];
  }, []);

  return <MovieList movies={movies} topIcons={topIcons} />;
};

export default BookmarkMovieList;
