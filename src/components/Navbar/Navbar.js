import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button
} from 'react-bootstrap';
import * as ROUTES from '../../constants/routes';
import * as CONFIG from '../../constants/config';
import { AuthUserContext, withAuthentication } from "../Session";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import { auth } from 'firebase-admin';


const NavigationAuth = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href={ROUTES.HOME}>{CONFIG.WEBNAME}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Cours" id="basic-nav-dropdown">
            <Nav.Link href={ROUTES.INTRO} className="text-dark">Introduction</Nav.Link>
            <Nav.Link href={ROUTES.AGRICULTURE} className="text-dark">Agriculture</Nav.Link>
            <Nav.Link href={ROUTES.ENERGIE} className="text-dark">Energie</Nav.Link>
            <Nav.Link href={ROUTES.CONSOMATION} className="text-dark">Consomation</Nav.Link>
            <Nav.Link href={ROUTES.ENJEUX} className="text-dark">Enjeux</Nav.Link>
            <Nav.Link href={ROUTES.SANTE} className="text-dark">Santé</Nav.Link>
          </NavDropdown>
          <NavDropdown title="Quizs" id="basic-nav-dropdown">
            <Nav.Link href={ROUTES.QUIZ1} className="text-dark">Quiz intro</Nav.Link>
            <Nav.Link href={ROUTES.QUIZ2} className="text-dark">Quiz enjeux</Nav.Link>
            <Nav.Link href={ROUTES.QUIZ3} className="text-dark">Quiz agriculture</Nav.Link>
            <Nav.Link href={ROUTES.QUIZ4} className="text-dark">Quiz consommation</Nav.Link>
            <Nav.Link href={ROUTES.QUIZ5} className="text-dark">Quiz energie</Nav.Link>
            <Nav.Link href={ROUTES.QUIZ6} className="text-dark">Quiz santé</Nav.Link>
          </NavDropdown>
        </Nav>
        <Nav>
          <Container>
            <NavDropdown title="Options" id="basic-nav-dropdown">
              <Nav.Link href={ROUTES.ACCOUNT} className="text-dark">Compte</Nav.Link>
              <SignOutButton></SignOutButton>
            </NavDropdown>

          </Container>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

const NavigationNonAuth = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href={ROUTES.HOME}>{CONFIG.WEBNAME}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href={ROUTES.SIGN_IN}>
            <Button>Connexion</Button>
          </Nav.Link>
          <Nav.Link eventKey={2} href={ROUTES.SIGN_UP}>
            <Button>Inscription</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

const Navigation = () => (
  <>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </>
);

//export default TopNav;
export default Navigation;