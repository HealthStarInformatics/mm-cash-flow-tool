import React, { useContext, useEffect } from 'react';

import { CFTContext } from "../App";

import '../styles/CFT.scss';

import CFTNav from './CFTNav';
import Overview from './Overview';
import Questions from './Questions';
// import Expenses from './Expenses';
import Summary from './Summary';
import Recommendations from './Recommendations';


const CFT = (props) => {
    const state = useContext((CFTContext));
    
    const displayedSection = (currentSection) => {
        // console.log('CFT: under displayedSection, section', currentSection);
        switch(currentSection) {
            case 'Overview':
                return <Overview />;
            case 'Questions':
                return <Questions />;
            case 'Summary':
                return <Summary />;
            case 'Recommendations':
                return <Recommendations />;
            default:
                return console.log('this is a joke');
        }
    }

         return (
                <main id="cft-wrapper">

                    <div className="cft-header">
                        Cash Flow Tool
                    </div>
                    <div>
                        <CFTNav activeSection={state.currentSection} />
                        {displayedSection(state.currentSection)}
                    </div>
                </main> 
        );
}



export default CFT;