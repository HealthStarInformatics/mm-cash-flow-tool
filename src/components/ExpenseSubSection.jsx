import React from 'react';

// import CFTTimePeriodNav from './CFTTimePeriodNav';
// import InputList from './InputList';
import ToolNav from './ToolNav';

import '../styles/SubSection.scss';

const ExpenseSubSection = (props) => {
        return (
            <div className='sub-section-wrapper'>
                    <h1>Expense SubSection</h1>
                
                <ToolNav next="/cft/incomes/IncomeJobOne" />
            </div>
        );
}

export default ExpenseSubSection;

