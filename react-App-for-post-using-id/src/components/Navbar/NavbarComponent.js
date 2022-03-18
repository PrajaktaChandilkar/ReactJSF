import React from "react";
import { Container,  Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
//because w ehave added Link from react Dom so to do Home as bootstrap navbar color
import "./NavbarComponent.css";
import About from "../about/About";

function NavbarComponent() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Social Media Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                className={({ isActive }) => (isActive ? "active" : " ")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/About"
                className={({ isActive }) => (isActive ? "active" : " ")}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/SinglePost"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Posts
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/Contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                as={NavLink}
                to="/SignUp"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sign-up
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/Login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
