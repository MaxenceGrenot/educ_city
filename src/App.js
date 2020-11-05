import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNav from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SignInPage from './components/SignIn/index';
import SignUpPage from './components/SignUp/index';

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
        </Switch>
      </>
    </Router>

  );
}

export default App;

