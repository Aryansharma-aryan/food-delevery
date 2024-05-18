import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer bg-dark mt-auto py-3">
      <div className="write">@FoodFlit</div>
      <Container >
        <Row>
          <Col md={6} className="text-md-start text-center">
            <p>@c 2024 company,Inc</p>
          
          </Col>
          <Col md={6} className="text-md-end text-center">
            <ListGroup className="list-group-horizontal text-light ">
              <ListGroupItem className="list-group-item-action"><a href="/">privacy policy </a></ListGroupItem>
              <ListGroupItem className="list-group-item-action"><a href="/">terms & condition </a></ListGroupItem>
              <ListGroupItem className="list-group-item-action"><a href="/">Contact Us</a></ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;