import React from "react";

import '../styles/CFT.scss';

import CFTNav from './CFTNav';
import Overview from './Overview';
import UseQuestions from './UseQuestions';
import Expenses from './Expenses';
import Summary from './Summary';
import Recommendations from './Recommendations';

// export const CashFlowContext = new React.createContext();



class CFT extends React.Component {
    state = {
        topics: ["Overview", "Income", "Expenses", "Summary", "Recommendations"],
        currentSectionId:"Overview",
        balance: {
            week1:0,
            week2:0,
            week3:0,
            week4:0,
            week5:0
        },
        totalIncome:0,
        totalexpenses:0,
        section:"Overview",
        subsection:""
    }

    

    displayedSection(section)  {
        switch(section) {
            case 'Overview':
                return <Overview />;
            case 'UseQuestions':
                return <UseQuestions />;
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

    render() {
        console.log('CFT: this.props', this.props);
        console.log('CFT: this.state.sectionId', this.state.currentSectionId);
        let sectionId = this.props.match.params.sectionId;
        console.log('section in CFT is ', sectionId);
        const contextObject = {
            ...this.state
        };
        
        return (
                <main id="cft-wrapper">
                    <div className="cft-header">
                        Cash Flow Tool
                    </div>
                    <div>
                        <CFTNav navtopics={this.state.topics} activeSection={sectionId} />
                        {this.displayedSection(sectionId)}
                    </div>
                </main>
                
        );
    }
}


export default CFT;