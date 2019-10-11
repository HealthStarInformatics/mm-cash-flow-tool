import React from 'react';

import '../styles/CFT.scss';

import CFTNav from './CFTNav';
import CFTOverview from './CFTOverview';
import Incomes from './Incomes';
import Expenses from './Expenses';
import Summary from './Summary';
import Recommendations from './Recommendations';
import IncomeStartingBalance from './IncomeStartingBalance';
import IncomeJobOne from './IncomeJobOne';
import IncomeJobTwo from './IncomeJobTwo';
import IncomeHousingSubsidy from './IncomeHousingSubsidy';
import IncomeSNAP from './IncomeSNAP';
import IncomeTANF from './IncomeTANF';
import IncomeOther from './IncomeOther';
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
            case 'IncomeStartingBalance':
                return <IncomeStartingBalance />;
            case 'IncomeJobOne':
                return <IncomeJobOne />;
            case 'IncomeJobTwo':
                return <IncomeJobTwo />;
            case 'IncomeHousingSubsidy':
                return <IncomeHousingSubsidy />;
            case 'IncomeSNAP':
                return <IncomeSNAP />;
            case 'IncomeTANF':
                return <IncomeTANF />;
            case 'IncomeOther':
                return <IncomeOther />;
            case 'ExpenseSubSection':
                return <ExpenseSubSection />;
            case 'SummarySubSection':
                return <SummarySubSection />;
            case 'RecommendationsSubSection':
                return <RecommendationsSubSection />;
            default:
                return <CFTOverview />;
        }
    }

    render() {
        let section = this.props.match.params.section;
        return (
            <main id="cft-wrapper">
                <div className="cft-header">
                    Cash Flow Tool
                </div>
                <div>
                    <CFTNav activeSection={section} /> 
                    {this.displayedSection(section)}
                </div>
            </main>

        );
    }
}

export default CFT;