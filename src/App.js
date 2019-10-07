import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

import MainNav from './components/MainNav';
import CFTHome from './components/CFTHome';
import CFTIncome from './components/CFTIncome';
import CFTExpenses from './components/CFTExpenses';
import CFTSummary from './components/CFTSummary';
import CFTRecommendations from './components/CFTRecommendations';


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
                <Route exact path='/' component={CFTHome} />
                <Route exact path='/cft/income' component={CFTIncome} />
                <Route exact path='/cft/expenses' component={CFTExpenses} />
                <Route exact path='/cft/summary' component={CFTSummary} />
                <Route exact path='/cft/recommendations' component={CFTRecommendations} />
              </Switch>
            </Router> 
        </main>
      </div>
    );

  }
  
}

export default App;
