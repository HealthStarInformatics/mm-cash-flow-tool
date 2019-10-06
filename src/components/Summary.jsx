import React from 'react';

import NavButton from './NavButton';
import IncomeSummary from './IncomeSummary';
import ExpenseSummary from './ExpenseSummary';

import '../styles/Income.scss';

class Summary extends React.Component {
    constructor(props) {
        super(props)
        //this.state
    }

    render() {
        return(
            <div className='income-wrapper'>
                <div className="instructions">
                        <h1>Let's Review</h1>
                        <h3>Here is an overview of your incomes and expenditures.</h3>
                </div>
                <div className="summary-section">
                    <IncomeSummary />
                    <ExpenseSummary />
                </div>
                <div>
                    <h2>New Weekly Cash Flow</h2>
                    <h2>WEEKLY CASHFLOW NUMBER WILL GO HERE</h2>
                </div>
                <NavButton />
            </div>
        );
    }
}

export default Summary;

