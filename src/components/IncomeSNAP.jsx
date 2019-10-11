import React from 'react';

import ToolNav from './ToolNav';

import '../styles/SubSection.scss';

const IncomeSNAP = () => {
        return (
            <div className='sub-section-wrapper'>
                <h1>Income SNAP</h1>
                <form className="input-frm">
                    <input className="input-values" type="number" name="income-snap" />
                    <input type="submit" value="submit" />
                </form>
                
                <ToolNav prev="/cft/IncomeHousingSubsidy" next="/cft/IncomeTANF" />
            </div>
        );
}

export default IncomeSNAP;

