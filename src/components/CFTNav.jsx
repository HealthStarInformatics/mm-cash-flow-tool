import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/CFTNav.scss';

function CFTNav(props) {
    return(
        <nav className="cft-nav-wrapper">
            <ul>
                <li className="incomes">
                    <Link to="/cft/incomes">Incomes</Link>
                </li>
                <li clssName="expenses">
                    <Link to="/cft/expenses">Expenses</Link>
                </li>
                <li className="summary">
                    <Link to="/cft/summary">Summary</Link>
                </li>
                <li className="recommendations">
                    <Link to="/cft/recommendations">Recommendations</Link>
                </li>
            </ul>
        </nav>
    );
}

export default CFTNav;