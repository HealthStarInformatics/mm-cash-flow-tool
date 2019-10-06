import React from 'react';
//import { Link } from 'react-router-dom';

import '../styles/CFTTimePeriodNav.scss';

function CFTTimePeriodNav(props) {
    return(
        <nav className="cft-time-segment-nav-wrapper">
            <div>
                <ul>
                    <li>Daily</li>
                    <li>Weekly</li>
                </ul>
            </div>
           
        </nav>
    );
}

export default CFTTimePeriodNav;