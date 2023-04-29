// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';

const NavigationBar = () => {
  const {user} = useContext(AuthContext)
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
           
           <Nav.Link href="">
           <Link to="/category/0">Home</Link>
           </Nav.Link>
           
           <Nav.Link href="">About</Nav.Link>
            <Nav.Link eventKey={2} href="">
              Career
            </Nav.Link>
          </Nav>
          <Nav>
          {user &&
          <Nav.Link href=""><FaUserCircle style={{fontSize:'2em'}}></FaUserCircle></Nav.Link>}
          {user?
            <Button variant="dark">Logout</Button>:
          <Link to="/login"><Button variant="dark">Login</Button></Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
};

export default NavigationBar;