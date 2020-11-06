import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNav from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SignInPage from './components/SignIn/index';
import SignUpPage from './components/SignUp/index';
import AccountPage from "./components/Account";
import Introduction from './components/Pages/introduction';
import Consommation from './components/Pages/consommation';
import Agriculture from './components/Pages/agriculture';
import Energie from './components/Pages/energies';
import Enjeux from './components/Pages/enjeux_objectif';
import { withAuthentication } from './components/Session/';

function App() {
  return (
    <Router>
      <>
        <TopNav></TopNav>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/signin">
            <SignInPage />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>
          <Route exact path="/account">
            <AccountPage />
          </Route>

          <Route exact path="/classes/intro">
            <Introduction />
          </Route>
          <Route exact path="/classes/consomation">
            <Consommation />
          </Route>
          <Route exact path="/classes/agriculture">
            <Agriculture />
          </Route>
          <Route exact path="/classes/energie">
            <Energie />
          </Route>
          <Route exact path="/classes/enjeux">
            <Enjeux />
          </Route>
        </Switch>
      </>
    </Router>

  );
}

export default withAuthentication(App);

