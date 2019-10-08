import React from 'react';

import CFTNav from './CFTNav';
import Recommendations from './Recommendations';

import '../styles/CFT.scss';

const CFT = () => {
    return(
        <div className="cft-wrapper"> 
            <CFTNav />
            <Recommendations />
        </div>
            
    ) ;
}
    

export default CFT;