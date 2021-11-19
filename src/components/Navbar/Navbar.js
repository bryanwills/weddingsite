import React from "react";
import {
  Container,
  Navbar,
  Nav
}from 'react-bootstrap';
import "./Navbar.css";

export class Navibar extends React.Component {
  render() {
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" className="bg-class" variant="dark">
            <Container>
            <Navbar.Brand href="/">
              <div>
              <img
                alt=""
                src="img/Pets_White.png"
                width="180"
                // height="40"
                className="d-inline-block align-top"
              />{' '}
                <img
                  alt=""
                  src="img/MR_InLine_White.png"
                  width="260"
                  // height="40"
                  className="d-inline-block align-top"
                />{' '}
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="main-nav-links">
                <Nav.Link href="/rsvp"><h5 className="linkText">RSVP</h5></Nav.Link>
                <Nav.Link href="/dress"><h5 className="linkText">Dress Code</h5></Nav.Link>
                <Nav.Link href="/details"><h5 className="linkText">Details</h5></Nav.Link>
                <Nav.Link href="/faq"><h5 className="linkText">FAQ</h5></Nav.Link>
                <Nav.Link href="/location"><h5 className="linkText">Where To Stay</h5></Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="">
                <div className="language-select">
                  <select
                    className="custom-select"
                    value="english"
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                    </select>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
  };
}
