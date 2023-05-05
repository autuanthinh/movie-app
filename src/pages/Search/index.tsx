import { Col, Container, Row } from 'react-bootstrap';
import FilterBar from '@containers/FilterBar';

import './index.scss';

function SearchPage() {
  return (
    <Container className="searc-page">
      <FilterBar />
    </Container>
  );
}

export default SearchPage;
