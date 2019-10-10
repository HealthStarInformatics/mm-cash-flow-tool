import React from 'react';

import ToolNav from './ToolNav';

import '../styles/SubSection.scss';

const IncomeHousingSubsidy = () => {
        return (
            <div className='sub-section-wrapper'>
                <h1>Enter any Housing Subsidy that you receive</h1>
                <form className="input-frm">
                    <input className="input-values" type="number" name="income-housing-subsidy" />
                    <input type="submit" value="submit" />
                </form>
                
                <ToolNav prev ="/cft/incomes/IncomeJobTwo" next="/cft/incomes/IncomeSNAP" />
            </div>
        );
}


export default IncomeHousingSubsidy;

