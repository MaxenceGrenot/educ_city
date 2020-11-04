import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.css';
import React from 'react';
import { Jumbotron,} from 'reactstrap';





function App() {
  return (
    
    
    <div className="App">
      <strong><h1>Homepage</h1></strong>
      
      
      
      <div className="wraper">
        <div className="logo">
          <img src="/images/logo.png" alt=""/>
        </div>
      </div>

      <ul class="nav-area">
				<li><a href="#">home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Portfolio</a></li>
				<li><a href="#">Contact</a></li>
			</ul>

    <div class ="welcome-text">
      <h1>La ville de demain est à vous</h1>
      <a href = "#">Inscrivez vous</a>
      
      <a href = "#">Jouer !</a>
    </div>

    <div>
      <Jumbotron>
        <h1 className="display-3">Bienvenue sur Educ'City!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>Pour en appendre d'avantage cliqué sur le bouton ci-dessous</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
   
      

    </div>
    
    
    
    
    
  );
}

export default App;

