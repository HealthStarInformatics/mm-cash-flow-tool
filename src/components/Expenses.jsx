import React from 'react';

import CFTTimePeriodNav from './CFTTimePeriodNav';
import InputList from './InputList';
import NavButton from './NavButton';

import '../styles/Income.scss';

class Expenses extends React.Component {
    constructor(props) {
        super(props)
        //this.state
    }

    render() {
        return(
            <div className='income-wrapper'>
                <div className="instructions">
                        <h1>Where is is going?</h1>
                        <h3>Use the form below to enter your daily or weekly expenses, 
                            along with their type, to help build an overview of your financial
                            obligations.</h3>
                </div>
                <form className="income-inputs-form">
                    <CFTTimePeriodNav />
                    <InputList />
                </form>
                <NavButton />
            </div>
        );
    }
}

export default Expenses;

