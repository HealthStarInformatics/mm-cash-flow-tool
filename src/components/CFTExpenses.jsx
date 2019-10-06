import React from 'react';

import CFTNav from './CFTNav';
import Expenses from './Expenses';

import '../styles/CashFlowTool.scss';

class CashFlowTool extends React.Component {
    constructor(props) {
        super(props)
        //this.state
    }

    render() {
        return(
            <div className="cft-wrapper"> 
                <CFTNav />
                <Expenses />
            </div>
                
        ) ;
    }

}
    

export default CashFlowTool;