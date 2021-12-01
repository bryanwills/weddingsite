import React from "react";
import {
  Container,
  Navbar,
  Nav
}from 'react-bootstrap';
import "./Navbar.css";
import LanguageSelect from "../../LanguageSelector";
import { useTranslation } from 'react-i18next';

const Navibar = () => {
  const { t } = useTranslation();
    return (
          <Navbar collapseOnSelect expand="lg" className="bg-class" variant="dark">
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="main-nav-links m-auto">
                <Nav.Link href="/">{t("menu_items.home")}</Nav.Link>
                <Nav.Link href="/rsvp">{t("menu_items.rsvp")}</Nav.Link>
                <Nav.Link href="/dress">{t("menu_items.dress_code")}</Nav.Link>
                <Nav.Link href="/details">{t("menu_items.details")}</Nav.Link>
                <Nav.Link href="/faq">{t("menu_items.faq")}</Nav.Link>
                <Nav.Link href="/location">{t("menu_items.where_to_stay")}</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="">
                <Navbar.Text>
                  <div className="align-right">
                    <LanguageSelect/>
                  </div>
                </Navbar.Text>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
    );
  };
export default Navibar;
