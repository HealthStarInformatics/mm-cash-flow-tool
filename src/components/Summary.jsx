import React from 'react';

import NavButton from './NavButton';
import IncomeSummary from './IncomeSummary';
import ExpenseSummary from './ExpenseSummary';

import '../styles/Income.scss';

const Summary = () => {
        return(
            <div className='income-wrapper'>
                <div className="instructions">
                        <h1>Let's Review</h1>
                        <p className="description">Here is an overview of your incomes and expenditures.</p>
                </div>
                <div className="summary-section">
                    <IncomeSummary />
                    <ExpenseSummary />
                </div>
                <div>
                    <h2>New Weekly Cash Flow</h2>
                    <h2>WEEKLY CASHFLOW NUMBER WILL GO HERE</h2>
                </div>
                <NavButton next="/cft/recommendations" />
            </div>
        );
}

export default Summary;

