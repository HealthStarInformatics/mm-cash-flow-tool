import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

import MainNav from './components/MainNav';
import CFTHome from './components/CFTHome';
import CFT from './components/CFT';

const App  = () => {
    return (
      <Router>
        <MainNav />
          <Switch>
              <Route exact path='/' component={CFTHome} />
              <Route path='/cft/:section' component={CFT} />
          </Switch>
      </Router>
      
    );
}

export default App;
