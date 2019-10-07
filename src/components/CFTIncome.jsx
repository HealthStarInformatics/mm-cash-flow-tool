import React from 'react';

import CFTNav from './CFTNav';
import Income from './Income';

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
                <Income />
            </div>
                
        ) ;
    }

}
    

export default CFT;