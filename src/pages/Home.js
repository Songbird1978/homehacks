import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Logo from "../components/Logo";

function Home() {
  return (
    <div>
      <Logo> We are the 3 stooges
      </Logo>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12"></Col>
          <Col size="md-12"></Col>
          <Col size="md-12"></Col>
          <Col size="md-12"></Col>
        </Row>
        <Row>
          <Col size="md-12"></Col>
          <Col size="md-12"></Col>
          <Col size="md-12"></Col>
          <Col size="md-12"></Col>
        </Row>
        <Row>
          <Col size="md-12"></Col>
          <Col size="md-12"></Col>
          <Col size="md-12"></Col>
          <Col size="md-12"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
