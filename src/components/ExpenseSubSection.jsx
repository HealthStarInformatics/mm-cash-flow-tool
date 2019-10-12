import React from 'react';

// import CFTTimePeriodNav from './CFTTimePeriodNav';
// import InputList from './InputList';
import ToolNavOLD from './ToolNavOLD';

import '../styles/SubSection.scss';

const ExpenseSubSection = (props) => {
        return (
            <div className='sub-section-wrapper'>
                    <h1>Expense SubSection</h1>
                
                <ToolNavOLD prev="/cft/Overview" next="/cft/SummarySubSection" />
            </div>
        );
}

export default ExpenseSubSection;

