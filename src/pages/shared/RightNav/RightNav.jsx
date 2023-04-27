// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button className="mb-3 mt-5" variant="outline-primary">
        {" "}
        <FaGoogle />
        Login with Google{" "}
      </Button>
      <Button variant="outline-secondary">
        <FaGithub />
        Login with Github
      </Button>

      <div className="mt-4">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook></FaFacebook>facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter></FaTwitter>twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram></FaInstagram>instagram</ListGroup.Item>
       </ListGroup>
      </div>
      <QZone></QZone>
    </div>
  );
};

export default RightNav;
