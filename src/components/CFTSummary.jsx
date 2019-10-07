import React from 'react';

import CFTNav from './CFTNav';
import Summary from './Summary';

import '../styles/CFT.scss';

class CFT extends React.Component {
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
    

export default CFT;