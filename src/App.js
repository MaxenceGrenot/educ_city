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
import Sante from "./components/Pages/sante";
import { withAuthentication } from './components/Session/';
import Quiz3 from "./components/Quiz/quiz3";
import Quiz2 from "./components/Quiz/quiz2";
import Quiz1 from "./components/Quiz/quiz1";
import Quiz6 from "./components/Quiz/quiz6";
import Quiz5 from "./components/Quiz/quiz5";
import Quiz4 from "./components/Quiz/quiz4";

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
          <Route exact path="/classes/sante">
            <Sante />
          </Route>
          <Route exact path="/classes/quiz1">
            <Quiz1 />
          </Route>
          <Route exact path="/classes/quiz2">
            <Quiz2 />
          </Route>
          <Route exact path="/classes/quiz3">
            <Quiz3 />
          </Route>
          <Route exact path="/classes/quiz4">
            <Quiz4 />
          </Route>
          <Route exact path="/classes/quiz5">
            <Quiz5 />
          </Route>
          <Route exact path="/classes/quiz6">
            <Quiz6 />
          </Route>
        </Switch>
      </>
    </Router>

  );
}

export default withAuthentication(App);

