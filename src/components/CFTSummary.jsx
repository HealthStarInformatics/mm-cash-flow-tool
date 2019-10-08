import React from 'react';

import CFTNav from './CFTNav';
import Summary from './Summary';

import '../styles/CFT.scss';

const CFT = () => {
        return(
            <div className="cft-wrapper"> 
                <CFTNav />
                <Summary />
            </div>
                
        ) ;
}
    

export default CFT;