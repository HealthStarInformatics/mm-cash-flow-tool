import React from 'react';

import ToolNav from './ToolNav';

import '../styles/SubSection.scss';

const IncomeOther = () => {
    console.log('this.props.match', this.props);
        return (
            <div className='sub-section-wrapper'>
                <h1>Enter any other income that you receive</h1>
                <form className="input-frm">
                    <input className="input-values" type="number" name="income-other" />
                    <input type="submit" value="submit" />
                </form>
                
                <ToolNav prev="/cft/incomes/IncomeTANF" next="/cft/Expenses" />
            </div>
        );
}

export default IncomeOther;

