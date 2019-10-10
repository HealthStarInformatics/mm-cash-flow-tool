import React from 'react';

// import CFTTimePeriodNav from './CFTTimePeriodNav';
// import InputList from './InputList';
import ToolNav from './ToolNav';

import '../styles/Section.scss';

const CFTOverview = (props) => {
        return (
            <div className="sub-section-wrapper">
                <div className="section-instructions">
                    <h3>Let's Create a Cash Flow Budget</h3>
                    <p className="tagline">A cash flow budget is all about tracking the timing of your income and expenses
                        to make sure you have enough from week to week.</p>
                </div>
                <div>What to do</div>
                <ul className="description">
                    <li>Enter your beginning balance for the week.</li>
                    <li>Add all of the income and benefits your receive that week.</li>
                    <li>Subtract all of your expenses for that week.</li>
                    <li>What's left is your ending balance.</li>
                    <li>Copy your ending balance for the week to the beginning balance of the next week..</li>
                </ul>
                
                <ToolNav next="/CFT/IncomeStartingBalance" />
            </div>
        );
}

export default CFTOverview;
