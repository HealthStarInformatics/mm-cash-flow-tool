import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QuestionsProvider } from "./QuestionsContext";


//import logo from './logo.svg';
import './App.css';

import MainNav from './components/MainNav';
import DMTKHome from './components/DMTKHome';
import CFT from './components/CFT';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <QuestionsProvider>
                    <Router>
                        <MainNav />
                            <Switch>
                                <Route exact path="/" component={DMTKHome} />
                                <Route exact path="/cft/:sectionId" component={CFT} />
                                {/* <Route exact path="/cft/:sectionId/:questionId" component={SingleQuestion} /> */}

                            </Switch>
                    </Router>
                </QuestionsProvider>
            </div>
            
            
          );
    }
    
}

export default App;
