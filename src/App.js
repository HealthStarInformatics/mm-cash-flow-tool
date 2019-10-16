import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//import logo from './logo.svg';
import './App.css';

import MainNav from './components/MainNav';
import DMTKHome from './components/DMTKHome';
import CFT from './components/CFT';

export const CFTContext = new React.createContext();

class App extends React.Component {
    state = {
        topics: ["Overview", "Income", "Expenses", "Summary", "Recommendations"],
        currentSection:"Hero",
        balance:0,
        weeks: {
            week1:0,
            week2:0,
            week3:0,
            week4:0,
            week5:0
        },
        balances: {
                startingBalance:0,
                jobOne: 0,
                jobTwo: 0,
                snap: 0,
                tanf: 0,
                housingSubsidy: 0,
                otherIncome: 0,
                cellphone:0,
                debtPayment: 0,
                eatingOut: 0,
                educationAndChildcare: 0,
                entertainment: 0,
                groceriesAndOtherSupplies: 0,
                healthExpenses: 0,
                helpingOthers:0,
                housingAndUtilities: 0,
                pets: 0,
                emergencyFund: 0,
                savingsForGoals: 0,
                transportation: 0,
        },
        totalIncome:0,
        totalexpenses:0
    }
    render() {

        const contextObject = {
            ...this.state,
            update: this.setState.bind(this)
        };

        return (
            <CFTContext.Provider value={contextObject}>
                <div className="App">
                        <Router>
                            <MainNav />
                                <Switch>
                                    <Route exact path="/" component={DMTKHome} />
                                    <Route exact path="/cft/:currentSectionId" component={CFT} />
                                    {/* <Route exact path="/cft/:sectionId/:questionId" component={SingleQuestion} /> */}

                                </Switch>
                        </Router>
                </div>
            </CFTContext.Provider> 
            
            
          );
    }
    
}

export default App;
