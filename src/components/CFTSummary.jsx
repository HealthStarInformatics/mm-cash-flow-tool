import React from 'react';

import CFTNav from './CFTNav';
import Summary from './Summary';

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
                <Summary />
            </div>
                
        ) ;
    }

}
    

export default CashFlowTool;