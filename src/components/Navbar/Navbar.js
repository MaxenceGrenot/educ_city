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

const TopNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href={ROUTES.HOME}>{CONFIG.WEBNAME}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={ROUTES.CLASSES}>Classes</Nav.Link>
            <Nav.Link href={ROUTES.GAMES}>Games</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href={ROUTES.SIGN_IN}>
              <Button>Signin</Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href={ROUTES.SIGN_UP}>
              <Button>Signup</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}


const NavigationAuth = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href={ROUTES.HOME}>{CONFIG.WEBNAME}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href={ROUTES.CLASSES}>Cours</Nav.Link>
          <Nav.Link href={ROUTES.GAMES}>Jeux</Nav.Link>
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