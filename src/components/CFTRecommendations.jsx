import React from 'react';

import CFTNav from './CFTNav';
import Recommendations from './Recommendations';

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
                <Recommendations />
            </div>
                
        ) ;
    }

}
    

export default CashFlowTool;