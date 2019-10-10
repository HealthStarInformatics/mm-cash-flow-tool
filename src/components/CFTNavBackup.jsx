import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/CFTNav.scss';

const isActiveSection = (active, section) => (active === section ? "active" : null);
console.log('isActiveSection', isActiveSection);

const CFTNav = (props) => {
    console.log('props.', props);
    console.log('isActiveSection', isActiveSection);
    return (
            <nav id="cft-nav-wrapper">
                <ul>
                    <li className={isActiveSection(activeSection, "overview")}>
                        <div>
                            <Link to="/CFT/Overview">Overview</Link>
                        </div>
                    </li>
                    <li className={isActiveSection(activeSection, "incomes")}>
                        <div>
                            <Link to="/CFT/Incomes">Incomes</Link>
                        </div>
                    </li>
                    <li className={isActiveSection(activeSection, "expenses")}>
                        <div>
                            <Link to="/CFT/Expenses">Expenses</Link>
                        </div>
                    </li>
                    <li className={isActiveSection(activeSection, "summary")}>
                        <div>
                            <Link to="/CFT/Summary">Summary</Link>
                        </div>
                    </li>
                    <li className={isActiveSection(activeSection, "recommendations")}>
                        <div>
                            <Link to="/CFT/Recommendations">Recommendations</Link>
                        </div>
                    </li>
                    
                </ul>
            </nav>
    );
}

export default CFTNav;