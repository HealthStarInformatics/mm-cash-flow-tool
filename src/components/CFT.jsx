import React from "react";

import '../styles/CFT.scss';

import CFTNav from './CFTNav';
import Overview from './Overview';
import IncomeForm from './IncomeForm';
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

export const CashFlowContext = new React.createContext();



class CFT extends React.Component {

    state = {
        topics: ["Overview", "Income", "Expenses", "Summary", "Recommendations"],
        currentSectionId:"Overview",
        income: {
            startingBalance: 128.00,
            jobOne:0,
            jobTwo:0,
            housingSubsidy:0,
            snap:0,
            tanf:0,
            other:0
        },
        expenses: {
            cellphone:0,
            debtPayment:0,
            eatingOut:0,
            educationChildcare:0,
            entertainment:0,
            groceriesSupplies:0,
            healthExpenses:0,
            helpingOthers:0,
            housingUtilities:0,
            pets:0,
            savingsEmergency:0,
            savingsEdOrRetirement:0,
            transportation:0,
            other:0
        },
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
            case 'IncomeForm':
                return <IncomeForm />;
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
                        {/* <Overview activeSection={section} /> */}
                        {/* <SingleQuestion */}
                        {this.displayedSection(sectionId)}
                    </div>
                </main>
                
        );
    }
}


export default CFT;