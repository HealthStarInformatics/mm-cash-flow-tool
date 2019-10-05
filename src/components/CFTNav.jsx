import React from 'react';
//import { Link } from 'react-router-dom';

import '../styles/CFTNav.scss';

function CFTNav(props) {
    return(
        <nav className="cft-nav-wrapper">
            <ul>
                <li>Incomes</li>
                <li>Expenses</li>
                <li>Summary</li>
                <li>Recommendations</li>
            </ul>
        </nav>
    );
}

export default CFTNav;