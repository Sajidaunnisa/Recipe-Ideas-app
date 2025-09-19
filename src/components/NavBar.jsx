// src/components/NavbarComponent.jsx
import React from "react";
import { Navbar, Container } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">🍴 Recipe Ideas</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
