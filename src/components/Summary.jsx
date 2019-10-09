import React from 'react';

import ToolNav from './ToolNav';
import IncomesSummary from './IncomesSummary';
import ExpensesSummary from './ExpensesSummary';

import '../styles/Incomes.scss';

const Summary = () => {
        return(
            <div className='Incomes-wrapper'>
                <div className="instructions">
                        <h1>Let's Review</h1>
                        <p className="description">Here is an overview of your Incomes and expenditures.</p>
                </div>
                <div className="summary-section">
                    <IncomesSummary />
                    <ExpensesSummary />
                </div>
                <div>
                    <h2>New Weekly Cash Flow</h2>
                    <h2>WEEKLY CASHFLOW NUMBER WILL GO HERE</h2>
                </div>
                <ToolNav next="/CFT/Recommendations" back="/CFT/Expenses" />
            </div>
        );
}

export default Summary;

