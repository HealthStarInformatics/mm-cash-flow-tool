import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IncomeQuestionsProvider from "./services/IncomeQuestionsProvider";


//import logo from './logo.svg';
import './App.css';

import MainNav from './components/MainNav';
import DMTKHome from './components/DMTKHome';
import CFT from './components/CFT';
import SingleQuestion from './components/SingleQuestion';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Trying out Context</h1>
                <IncomeQuestionsProvider>
                    <Router>
                        <MainNav />
                            <Switch>
                                <Route exact path="/" component={DMTKHome} />
                                <Route exact path="/cft/:sectionId" component={CFT} />
                                <Route exact path="/cft/:sectionId/:questionId" component={SingleQuestion} />

                            </Switch>
                    </Router>
                </IncomeQuestionsProvider>
            </div>
            
            
          );
    }
    
}

export default App;
