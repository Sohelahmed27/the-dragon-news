// eslint-disable-next-line no-unused-vars
import React from "react";
import {Outlet} from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/shared/Footer/Footer";
import Header from "../pages/shared/Header/Header";
import LetNav from "../pages/shared/LetNav/LetNav";
import RightNav from "../pages/shared/RightNav/RightNav";
import NavigationBar from "../pages/shared/NavagationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={3}>
            <LetNav></LetNav>
          </Col>
          <Col lg={6}>
               <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
