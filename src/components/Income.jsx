import React from 'react';

import CFTTimePeriodNav from './CFTTimePeriodNav';
import InputList from './InputList';
import NavButton from './NavButton';

import '../styles/Income.scss';

class Income extends React.Component {
    constructor(props) {
        super(props)
        //this.state
    }

    render() {
        return(
            <div className='income-wrapper'>
                <div className="instructions">
                        <h1>What's coming in?</h1>
                        <h3>Use the form below to enter your daily or weekly incomes, 
                            along with their type, to help build an overview of the funds
                            you have available.</h3>
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

export default Income;

