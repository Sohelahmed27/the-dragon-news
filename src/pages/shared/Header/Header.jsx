// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";


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

      
      
    </Container>
  );
};

export default Header;
