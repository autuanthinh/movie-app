import { Container } from 'react-bootstrap';
import BookmarkMovieList from '@pages/Bookmark/components/BookmarkMovieList';

import './index.scss';

function SearchPage() {
  return (
    <Container className="bookmark-page my-4">
      <h2>Bookmark</h2>
      <BookmarkMovieList />
    </Container>
  );
}

export default SearchPage;
