import React from 'react';

import CFTTimePeriodNav from './CFTTimePeriodNav';
import InputList from './InputList';
import NavButton from './NavButton';

import '../styles/Income.scss';

const Expenses = () => {
        return(
            <div className='income-wrapper'>
                <div className="instructions">
                        <h1>Where is is going?</h1>
                        <p className="description">Use the form below to enter your daily or weekly expenses, 
                            along with their type, to help build an overview of your financial
                            obligations.</p>
                </div>
                <form className="income-inputs-form">
                    <CFTTimePeriodNav />
                    <InputList />
                </form>
                <NavButton next="/cft/summary" />
            </div>
        );
}

export default Expenses;

