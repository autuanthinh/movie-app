import { ChangeEventHandler, FC, useCallback, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import './index.scss';

const BookMarkButton: FC<{}> = () => {
  const count = 1;

  return (
    <Button className="bookmark-button" variant="info">
      <FontAwesomeIcon icon={['far', 'bookmark']} />
      <span className="mx-2">Bookmark</span>
      {count > 0 ? <span className="count">({count})</span> : null}
    </Button>
  );
};

export default BookMarkButton;
