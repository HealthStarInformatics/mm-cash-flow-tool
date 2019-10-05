import React from 'react';

import CFTNav from './CFTNav';

import '../styles/CashFlowTool.scss';

function CashFlowTool(props) {
    return(
        <div> 
            <CFTNav />
            <div className="instructions">
                <h1>What's coming in?</h1>
                <h3>Use the form below to enter your daily or weekly incomes, 
                    along with their type, to help build an overview of the funds
                    you have available.</h3>
            </div>
            <div>this is the body of the app</div>

        </div>
    ) 
}

export default CashFlowTool;