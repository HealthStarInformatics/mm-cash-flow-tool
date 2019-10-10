import React from 'react';

import ToolNav from './ToolNav';

import '../styles/SubSection.scss';

const IncomeJobOne = () => {
        return (
            <div className='sub-section-wrapper'>
                <h1>Income Job One</h1>
                <form className="input-frm">
                    <input className="input-values" type="number" name="income-job-one" />
                    <input type="submit" value="submit" />
                </form>
                
                <ToolNav next="/cft/incomes/IncomeJobTwo" prev="/cft/incomes/IncomeStartingBalance" />
            </div>
        );
}

export default IncomeJobOne;

