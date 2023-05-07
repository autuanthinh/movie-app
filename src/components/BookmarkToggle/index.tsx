import { FC } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MovieBasic } from '@apptypes/model';

import './index.scss';

const BookmarkToggle: FC<{
  movie: MovieBasic;
  active: boolean;
  toggle: (active: boolean, movie: MovieBasic) => void;
}> = ({ movie, active, toggle }) => {
  return (
    <span
      className={classnames('bookmark-toggle d-inline-flex align-items-center', {
        'bookmark-toggle--active': active,
        'bookmark-img-animation': !active,
      })}
      onClick={() => toggle(!active, movie)}
    >
      {active ? (
        <FontAwesomeIcon className="bookmark-toggle__icon--main" icon={['fas', 'bookmark']} />
      ) : (
        <FontAwesomeIcon className="bookmark-toggle__icon--main" icon={['far', 'bookmark']} />
      )}
      {active ? (
        <FontAwesomeIcon icon={['fas', 'check']} className="bookmark-toggle__icon--sub" />
      ) : (
        <FontAwesomeIcon icon={['fas', 'plus']} className="bookmark-toggle__icon--sub" />
      )}
    </span>
  );
};

export default BookmarkToggle;
