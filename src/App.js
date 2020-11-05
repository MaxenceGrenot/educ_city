import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNav from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <>
        <TopNav></TopNav>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>

  );
}

export default App;

