import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';



import './index.scss';

function HomePage() {
  return (
    <div className="home-page">
      <Container fluid className="section--1">
        <Row>
          <Col md={4}>
            {/* <DateAchievementRate /> */}
          </Col>
          <Col md={8}>
            {/* <BodyPercentageGraph /> */}
          </Col>
        </Row>
      </Container>
      {/* <ViewHistory /> */}
    </div>
  );
}

export default HomePage;
