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
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/reducers/authReducer";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <>
      <header className="main-header login-header-home">
        <Navbar expand="lg" sticky="top">
          <Container fluid>
            <Row className="w-100 m-auto">
              <Col>
                <div className="d-flex justify-content-between align-items-center">
                  <Navbar.Brand href="/">
                    <img src="assets/img/logo.png" />
                  </Navbar.Brand>

                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link as={Link} to="/Dashboard">
                        <i className="fa fa-th-large"></i> Dashboard
                      </Nav.Link>

                      <Nav.Link as={Link} to="/manage-property-listing">
                        <i className="fa fa-exchange"></i> Properties
                      </Nav.Link>
                      <Nav.Link as={Link} to="/Profile">
                        <i className="fa fa-user"></i> Profile
                      </Nav.Link>
                      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                        </NavDropdown> */}

                      <Nav.Link
                        onClick={() => {
                          dispatch(logout({}));
                        }}
                      >
                        <i className="fa fa-sign-out"></i> Logout
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>

                  <Link to="/" className="ms-auto profile-dropdown">
                    <img src="assets/img/logo.png" />
                  </Link>
                  <Link to="/" className="border-btn">
                    Logout <i className="fa fa-sign-out ms-2"></i>
                  </Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
