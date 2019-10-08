import React from 'react';

import CFTNav from './CFTNav';
import Expenses from './Expenses';

import '../styles/CFT.scss';

const CFT = () => {
    return(
        <div className="cft-wrapper"> 
            <CFTNav />
            <Expenses />
        </div>
            
    ) ;

}
    

export default CFT;