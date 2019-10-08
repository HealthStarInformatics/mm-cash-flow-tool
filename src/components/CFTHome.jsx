import React from 'react';

import "../styles/CFTHome.scss";

import CFTHero from './CFTHero';
import OtherTools from './OtherTools';

const CFTHome = () => {
    return(
        <div className="cft-home-wrapper">
            <CFTHero />
            <OtherTools />
        </div>

    );
}

export default CFTHome;