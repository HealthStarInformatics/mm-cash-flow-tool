import React from 'react';

import CFTTimePeriodNav from './CFTTimePeriodNav';
import InputList from './InputList';
import NavButton from './NavButton';

import '../styles/Income.scss';

const Income = () => {
        return(
            <div className='income-wrapper'>
                <div className="instructions">
                        <h1>What's coming in?</h1>
                        <p className="description">Use the form below to enter your daily or weekly incomes, 
                            along with their type, to help build an overview of the funds
                            you have available.</p>
                </div>
                <form className="income-inputs-form">
                    <CFTTimePeriodNav />
                    <InputList />
                </form>
                <NavButton next="/cft/expenses" />
            </div>
        );
}

export default Income;

