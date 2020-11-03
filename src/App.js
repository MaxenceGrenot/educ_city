import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.css';

import { BrowserRouter as Router } from 'react-router-dom';
import TopNav from './components/Navbar';

function App() {
  return (
    <Router>
      <TopNav></TopNav>  
    </Router>
  );
}

export default App;
