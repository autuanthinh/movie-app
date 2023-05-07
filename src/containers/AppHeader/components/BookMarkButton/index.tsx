import { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { selectors } from '@reducers/bookmark';

const BookMarkButton: FC<{}> = () => {
  const total = useSelector(selectors.bookmarkTotal);

  return (
    <NavLink className="bookmark-button btn d-inline-flex align-items-center" to={'/bookmark'}>
      <FontAwesomeIcon icon={['far', 'bookmark']} />
      <span className="bookmark-button__text ms-2">Bookmark ({total})</span>
    </NavLink>
  );
};

export default BookMarkButton;
