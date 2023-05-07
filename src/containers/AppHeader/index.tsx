import { NavLink } from 'react-router-dom';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import SearchBox from './components/SearchBox';
import BookMarkButton from './components/BookMarkButton';

import './index.scss';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="app-header">
      <Container>
        <Row>
          <Col md={3} xs={6} className="col-branch d-flex align-items-center">
            <Navbar.Brand as={NavLink} to="/">
              BEST MOVIE
            </Navbar.Brand>
          </Col>
          <Col md={6} xs={12} className="col-search">
            <SearchBox />
          </Col>
          <Col md={3} xs={6} className="col-bookmark d-flex justify-content-end">
            <BookMarkButton />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
