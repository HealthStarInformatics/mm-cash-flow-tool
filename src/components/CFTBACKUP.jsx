import React, { useContext } from 'react';

import { CFTContext } from "./App";

import '../styles/CFT.scss';

import CFTNav from './CFTNav';
import Overview from './Overview';
import Questions from './Questions';
import Expenses from './Expenses';
import Summary from './Summary';
import Recommendations from './Recommendations';

// export const CFTContext = new React.createContext();

class CFT extends React.Component {
    const state = useContext((CFTContext));

    // state = {
    //     topics: ["Overview", "Income", "Expenses", "Summary", "Recommendations"],
    //     currentSectionId:"Overview",
    //     balance: {
    //         week1:0,
    //         week2:0,
    //         week3:0,
    //         week4:0,
    //         week5:0
    //     },
    //     totalIncome:0,
    //     totalexpenses:0,
    //     section:"Overview",
    //     subsection:""
    // }

    displayedSection(section)  {
        console.log('what is the section', section);
        switch(section) {
            case 'Overview':
                return <Overview />;
            case 'Questions':
                return <Questions />;
            case 'Expenses':
                return <Expenses />;
            case 'Summary':
                return <Summary />;
            case 'Recommendations':
                return <Recommendations />;
            default:
                return console.log('this is a joke');
        }
    }

    // render() {
    //     console.log('CFT: state', this.state);
    //     console.log('CFT: state.sectionId', this.state.currentSectionId);
    //     // let sectionId = this.props.match.params.sectionId;
    //     let currentSectionId = this.state.currentSectionId;
        
        // const contextObject = {
        //     ...this.state,
        //     update: this.setState.bind(this)
        // };
        
        return (
            // <CFTContext.Provider value={contextObject}>
                <main id="cft-wrapper">
                    <div className="cft-header">
                        Cash Flow Tool
                    </div>
                    <div>
                        <CFTNav navtopics={this.state.topics} activeSection={currentSectionId} />
                        {this.displayedSection(currentSectionId)}
                    </div>
                </main>
            // </CFTContext.Provider>     
        );
    }
//}


export default CFT;