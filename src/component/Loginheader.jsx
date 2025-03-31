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

export default function Header() {
  return (
    <>
      <header className="main-header login-header-home login-without-scroll">
        <Navbar className="" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src="assets/img/logo-blue.png" />
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">About</Nav.Link>
                <Nav.Link href="/">Tokenomics</Nav.Link>
                <Nav.Link href="/">Roadmap</Nav.Link>
                <Nav.Link href="/">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div>
              <a className="border-btn" href="/">
                Login
              </a>
              <a className="common-btn" href="/Register">
                Register
              </a>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
      </header>
    </>
  );
}
