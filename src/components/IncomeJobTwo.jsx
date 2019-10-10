import React from 'react';

import ToolNav from './ToolNav';

import '../styles/SubSection.scss';

const IncomeJobTwo = () => {
        return (
            <div className='sub-section-wrapper'>
                <h1>Income Job Two</h1>
                <form className="input-frm">
                    <input className="input-values" type="number" name="income-job-two" />
                    <input type="submit" value="submit" />
                </form>
                
                <ToolNav prev="/cft/incomes/IncomeJobOne" next="/cft/income/IncomeHousingSubsidy" />
            </div>
        );
}


export default IncomeJobTwo;

