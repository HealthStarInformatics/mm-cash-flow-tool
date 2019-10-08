import React from 'react';

import CFTNav from './CFTNav';
import Income from './Income';

import '../styles/CFT.scss';

const CFT = () => {
    return(
        <div className="cft-wrapper"> 
            <CFTNav />
            <Income />
        </div>
            
    ) ;
}
    

export default CFT;