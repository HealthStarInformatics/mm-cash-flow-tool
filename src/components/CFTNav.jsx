import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/CFTNav.scss';

const isActiveSection = (active, section) => (active === section ? "active" : null);
// console.log('isActiveSection', isActiveSection);

const CFTNav = (props) => {
    console.log('props.', props.activeSection);
    //console.log('isActiveSection', isActiveSection);
    return (
            <nav id="cft-nav-wrapper">
                <ul>
                    <li>
                        <div className={isActiveSection(props.activeSection,"Overview")}>
                            <Link to="/cft/Overview">Overview</Link>
                        </div>
                    </li>
                    <li>
                        <div className={isActiveSection(props.activeSection,"Incomes")}>
                            <Link to="/cft/Incomes">Incomes</Link>
                        </div>
                    </li>
                    <li>
                        <div className={isActiveSection(props.activeSection,"Expenses")}>
                            <Link to="/cft/Expenses">Expenses</Link>
                        </div>
                    </li>
                    <li>
                        <div className={isActiveSection(props.activeSection,"Summary")}>
                            <Link to="/cft/Summary">Summary</Link>
                        </div>
                    </li>
                    <li>
                        <div className={isActiveSection(props.activeSection,"Recommendations")}>
                            <Link to="/cft/Recommendations">Recommendations</Link>
                        </div>
                    </li>
                    
                </ul>
            </nav>
    );
}

export default CFTNav;