import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  Button
} from 'react-bootstrap';
import * as ROUTES from '../../constants/routes';
import * as CONFIG from '../../constants/config';
import {AuthUserContext} from "../Session";
import {Link} from "react-router-dom";
import SignOutButton from "../SignOut";

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

const Navigation = () => (
    <div>
      <AuthUserContext.Consumer>
        {authUser =>
            authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
      </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href={ROUTES.HOME}>{CONFIG.WEBNAME}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={ROUTES.CLASSES}>Classes</Nav.Link>
            <Nav.Link href={ROUTES.GAMES}>Games</Nav.Link>
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

//export default TopNav;
export default Navigation;