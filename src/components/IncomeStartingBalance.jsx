import React, { useContext } from 'react';
import { CashFlowContext } from './CFT';

import ToolNav from './ToolNav';

import { saveToStorage } from "../services/storageServices";

import '../styles/SubSection.scss';

const IncomeStartingBalance = (props) => {
    const state = useContext(CashFlowContext);
    console.log('state is', state);

    console.log('made it to income starting balance', props);
        return (
                    <div className='sub-section-wrapper'>
                        <h1>What is your starting balance?</h1>
                        <p className="description">Your starting balance is a total of your cash,
                            prepaid card, and account balances.</p>
                            <div>missy{state.income.startingBalance}</div>
                        <input 
                            className="input-values" 
                            type="number" 
                            name="starting-balance"
                            defaultValue={state.income.startingBalance}
                            onChange={state.update} />
                        <input type="submit" value="submit" />
                        
                    </div>
            
        );
}

export default IncomeStartingBalance;

