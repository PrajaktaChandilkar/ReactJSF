import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from "react-bootstrap"
import './NavbarComponent.css'
import SignUp from '../SignUp'
import About from "../About"
import Login from '../Login'
import LandingPage from "../LandingPage";

function NavbarComponent() {
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Social media site</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Home" className="postName">Home</Nav.Link>
              <Nav.Link href="/About" className="postName">About</Nav.Link>
              <Nav.Link href="/Posts" className="postName">Posts</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/Login" className="postName">Login</Nav.Link>
              <Nav.Link href="/SignUp" className="postName">SignUp</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent