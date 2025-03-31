import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Col,
  Row,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Loginheader() {
  return (
    <>
      <header className="main-header login-header-home login-without-scroll">
        <Navbar className="" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src="assets/img/logo.png" />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
