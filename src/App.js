
import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


/**Views */
import About from './views/About';
import Home from './views/Home';
import Rental from './views/Rental';

import './App.css';
function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route path="/about"  component={About}/>
        <Route path="/rentals"  component={Rental}/>
      </Switch>
      
    </Router>
  );
}

export default App;
