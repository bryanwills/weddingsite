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
              <img
                alt=""
                src="img/Pets_White.png"
                width="260"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="main-nav-links">
                <Nav.Link href="/rsvp">RSVP</Nav.Link>
                <Nav.Link href="/dress">Dress Code</Nav.Link>
                <Nav.Link href="/details">Details</Nav.Link>
                <Nav.Link href="/faq">FAQ</Nav.Link>
                <Nav.Link href="/location">Where To Stay</Nav.Link>
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
