import React from 'react';

import ToolNav from './ToolNav';

import '../styles/SubSection.scss';

const IncomeTANF = () => {
        return (
            <div className='sub-section-wrapper'>
                <h1>Income TANF</h1>
                <form className="input-frm">
                    <input className="input-values" type="number" name="income-tanf" />
                    <input type="submit" value="submit" />
                </form>
                <ToolNav prev="/cft/IncomeSNAP" next="/cft/IncomeOther" />
            </div>
        );
}

export default IncomeTANF;

