import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

import MainNav from './components/MainNav';
import CashFlowToolHome from './components/CashFlowToolHome';
import CashFlowTool from './components/CashFlowTool';


class App extends React.Component{
  constructor(props) {
    super(props);
    //this.state
  }

  render() {
    return (
      <div className="app-wrapper">
        <MainNav />
        <main className="app-section">
            <Router>
              <Switch>
                <Route exact path='/' component={CashFlowToolHome} />
                <Route exact path='/cashflowtool/:cftsection' component={CashFlowTool} />
              </Switch>
            </Router> 
        </main>
      </div>
    );

  }
  
}

export default App;
