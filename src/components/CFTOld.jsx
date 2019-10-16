import React, { useContext } from 'react';

import { CFTContext } from "./App";

import '../styles/CFT.scss';

import CFTNav from './CFTNav';
import Overview from './Overview';
import Questions from './Questions';
import Expenses from './Expenses';
import Summary from './Summary';
import Recommendations from './Recommendations';


const CFT = (props) => {
    const state = useContext((CFTContext));

    

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