import React from 'react';

// import InputList from './InputList';
import ToolNavOLD from './ToolNavOLD';

import '../styles/Section.scss';

const Expenses = () => {
        return(
            <div className='section-wrapper'>
                <div className="instructions">
                        <h1>Where is is going?</h1>
                        <p className="description">Use the form below to enter your daily or weekly expenses, 
                            along with their type, to help build an overview of your financial
                            obligations.</p>
                </div>
                <form className="Incomes-inputs-form">
                    {/* <CFTTimePeriodNav /> */}
                    {/* <InputList /> */}
                </form>
                <ToolNavOLD next="/CFT/Summary" back="/CFT/Incomes" />
            </div>
        );
}

export default Expenses;

