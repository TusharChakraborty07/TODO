import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import './LatestNews.css';

const LatestNews = () => {
  return (
    <div className="latest-news text-center">
      <Container>
        <Row>
          <Col className="col-sm-12 ">
            <span className="latest-news-badge">Latest News</span>
            <span className="latest-news-text">
              Todo App has been launched.
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LatestNews;
