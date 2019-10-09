import React from 'react';

import CFTTimePeriodNav from './CFTTimePeriodNav';
import InputList from './InputList';
import ToolNav from './ToolNav';

import '../styles/Incomes.scss';

const Incomes = () => (
            <div className='Incomes-wrapper'>
                <div className="instructions">
                        <h1>What's coming in?</h1>
                        <p className="description">Use the form below to enter your daily or weekly Incomes, 
                            along with their type, to help build an overview of the funds
                            you have available.</p>
                </div>
                <form className="Incomes-inputs-form">
                    <CFTTimePeriodNav />
                    <InputList />
                </form>
                <ToolNav next="/CFT/Expenses" />
            </div>
);

export default Incomes;

