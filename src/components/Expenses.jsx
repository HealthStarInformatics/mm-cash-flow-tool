import React from 'react';

import CFTTimePeriodNav from './CFTTimePeriodNav';
import InputList from './InputList';
import ToolNav from './ToolNav';

import '../styles/Incomes.scss';

const Expenses = () => {
        return(
            <div className='Incomes-wrapper'>
                <div className="instructions">
                        <h1>Where is is going?</h1>
                        <p className="description">Use the form below to enter your daily or weekly expenses, 
                            along with their type, to help build an overview of your financial
                            obligations.</p>
                </div>
                <form className="Incomes-inputs-form">
                    <CFTTimePeriodNav />
                    <InputList />
                </form>
                <ToolNav next="/CFT/Summary" back="/CFT/Incomes" />
            </div>
        );
}

export default Expenses;

