import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/CFTNav.scss';

const isActiveSection = (active, section) => (active === section ? "active" : null);

const CFTNav = (props) => {
    const sections = props.navtopics.map(section => 
        <li>
            <div className={isActiveSection(props.activeSection,{section})}>
                <Link to={`/cft/${section}`}>{section}</Link>
            </div>
        </li>
    );
    return (
            <nav id="cft-nav-wrapper">
                <ul>
                    {sections}
                </ul>
            </nav>
    );
}

export default CFTNav;