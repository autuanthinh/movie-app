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
          <Col sm={3}>
            <Navbar.Brand as={NavLink} to="/">
              MOVIE
            </Navbar.Brand>
          </Col>
          <Col sm={5}>
            <SearchBox />
          </Col>
          <Col sm={4} className='text-end'>
            <BookMarkButton />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
