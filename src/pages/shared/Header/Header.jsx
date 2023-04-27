// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMM D, YYYY")}</p>
      </div>
      <div className="d-flex text-danger mb-3 mt-3">
        <Button variant="danger">Latest</Button>{" "}
        <Marquee speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
           <Nav.Link href="">Home</Nav.Link>
           <Nav.Link href="">About</Nav.Link>
            <Nav.Link eventKey={2} href="">
              Career
            </Nav.Link>
          </Nav>
          <Nav>
          <Button variant="dark">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </Container>
  );
};

export default Header;
