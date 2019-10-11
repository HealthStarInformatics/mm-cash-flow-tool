import React from 'react';

// import CFTTimePeriodNav from './CFTTimePeriodNav';
// import InputList from './InputList';
import ToolNav from './ToolNav';

import '../styles/SubSection.scss';

const IncomeStartingBalance = (props) => {
    console.log('made it to income starting balance', props);
        return (
            <div className='sub-section-wrapper'>
                    <h1>What is your starting balance?</h1>
                    <p className="description">Your starting balance is a total of your cash,
                prepaid card, and account balances.</p>
                <form className="input-frm">
                    <input className="input-values" type="number" name="starting-balance" />
                    <input type="submit" value="submit" />
                </form>
                
                <ToolNav prev="/cft/CFTOverview" next="/cft/IncomeJobOne" />
            </div>
        );
}

export default IncomeStartingBalance;

