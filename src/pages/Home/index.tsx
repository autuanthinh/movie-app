import { Col, Container, Row } from 'react-bootstrap';

import './index.scss';

function HomePage() {
  return (
    <Container fluid className="home-page">
      <Row>
        <Col md={4}>
          adu
        </Col>
        <Col md={8}>
          alo
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
