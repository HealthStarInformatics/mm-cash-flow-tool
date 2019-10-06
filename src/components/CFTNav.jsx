import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/CFTNav.scss';

function CFTNav(props) {
    return(
        <nav className="cft-nav-wrapper">
            <ul>
                <li className="incomes">
                    <Link to="/cashflowtool/incomes">Incomes</Link>
                </li>
                <li clssName="expenses">
                    <Link to="/cashflowtool/expenses">Expenses</Link>
                </li>
                <li className="summary">
                    <Link to="/cashflowtool/summary">Summary</Link>
                </li>
                <li className="recommendations">
                    <Link to="/cashflowtool/recommendations">Recommendations</Link>
                </li>
            </ul>
        </nav>
    );
}

export default CFTNav;