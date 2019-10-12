import React from 'react';

import ToolNavOLD from './ToolNavOLD';
import IncomeSummary from './IncomeSummary';
import ExpensesSummary from './ExpensesSummary';

import '../styles/Section.scss';

const Summary = () => {
        return(
            <div className='section-wrapper'>
                <div className="instructions">
                        <h1>Let's Review</h1>
                        <p className="description">Here is an overview of your Incomes and expenditures.</p>
                </div>
                <div className="summary-section">
                    <IncomeSummary />
                    <ExpensesSummary />
                </div>
                <div>
                    <h2>New Weekly Cash Flow</h2>
                    <h2>WEEKLY CASHFLOW NUMBER WILL GO HERE</h2>
                </div>
                <ToolNavOLD next="/CFT/Recommendations" back="/CFT/Expenses" />
            </div>
        );
}

export default Summary;

