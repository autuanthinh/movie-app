import { Col, Container, Row } from 'react-bootstrap';
import VideoTypeSwiper from './components/VideoTypeSwiper';

import './index.scss';

function HomePage() {
  return (
    <Container className="home-page my-4">
      <Row>
        <Col>
          <VideoTypeSwiper type="" title="Top Searches" search="game" />
        </Col>
      </Row>
      <Row>
        <Col>
          <VideoTypeSwiper type="" title="Trending Now" search="hero" />
        </Col>
      </Row>
      <Row>
        <Col>
          <VideoTypeSwiper type="movie" title="Top movies" search="hero" />
        </Col>
      </Row>
      <Row>
        <Col>
          <VideoTypeSwiper type="series" title="Top series" search="hero" />
        </Col>
      </Row>
      <Row>
        <Col>
          <VideoTypeSwiper type="" title="Top drama" search="drama" />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
