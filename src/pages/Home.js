import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import Logo from "../components/Logo";

function Home() {
  return (
    <div>
      <Logo >
      </Logo>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Column size="md-12"></Column>
          <Column size="md-12"></Column>
          <Column size="md-12"></Column>
          <Column size="md-12"></Column>
        </Row>
        <Row>
          <Column size="md-12"></Column>
          <Column size="md-12"></Column>
          <Column size="md-12"></Column>
          <Column size="md-12"></Column>
        </Row>
        <Row>
          <Column size="md-12"></Column>
          <Column size="md-12"></Column>
          <Column size="md-12"></Column>
          <Column size="md-12"></Column>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
