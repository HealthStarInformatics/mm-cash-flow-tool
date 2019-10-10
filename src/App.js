import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

import MainNav from './components/MainNav';
import DMTKHome from './components/DMTKHome';
import CFT from './components/CFT';

const App  = () => {
    return (
      <Router>
         <MainNav />
          <Switch>
              <Route exact path='/' component={DMTKHome} />
              <Route exact path='/cft/:section' component={CFT} />
          </Switch>
      </Router>
      
    );
}

export default App;
