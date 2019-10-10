import React from 'react';

import '../styles/CFT.scss';

import CFTNav from './CFTNav';
import CFTOverview from './CFTOverview';
import Incomes from './Incomes';
import Expenses from './Expenses';
import Summary from './Summary';
import Recommendations from './Recommendations';
import IncomeStartingBalance from './IncomeStartingBalance';
import ExpenseSubSection from './ExpenseSubSection';
import SummarySubSection from './SummarySubSection';
import RecommendationsSubSection from './RecommendationsSubSection';

class CFT extends React.Component {

    displayedSection(section)  {
        switch(section) {
            case 'Incomes':
                return <Incomes />;
            case 'Expenses':
                return <Expenses />;
            case 'Summary':
                return <Summary />;
            case 'Recommendations':
                return <Recommendations />;
            default:
                return <CFTOverview />;
        }
    }

    findAndDisplaySubSection(section) {
            switch(section) {
                case 'Overview' || 'Incomes':
                    return <IncomeStartingBalance />;
                case 'Expenses':
                    return <ExpenseSubSection />;
                case 'Summary':
                    return <SummarySubSection />;
                case 'Recommendations':
                    return <RecommendationsSubSection />;
                default:
                    return <CFTOverview />;
            }
       }

    render() {
        console.log('this.props.match from cft', this.props.match);
        let section = this.props.match.params.section;
        console.log('section is ', section);

        let theSection=this.displayedSection(section);
        let theSubsection= this.findAndDisplaySubSection(section);
        console.log('theSection is ', theSection);
        console.log('theSubsection is ', theSubsection);
        //console.log('see the section component', this.displayedSection(section));
        //console.log('see the subsection component', this.findAndDisplaySubSection(section));
        
        
        return (
            <main id="cft-wrapper">
                <div className="cft-header">
                    Cash Flow Tool
                </div>
                <div>
                    <CFTNav activeSection={section} /> 
                    {this.displayedSection(section)}
                    {this.findAndDisplaySubSection(section)}
                </div>
            </main>

        );
    }
}

export default CFT;