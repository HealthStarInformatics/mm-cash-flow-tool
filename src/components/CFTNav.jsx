import React, {useContext } from 'react';
import { Link } from 'react-router-dom';

import { CFTContext } from "../App";

import '../styles/CFTNav.scss';

const isActiveSection = (active, section) => (active === section ? "active" : null);

const CFTNav = (props) => {

    const state = useContext((CFTContext));
    console.log('CFTNav: state', state);
    const sections = state.topics.map(section => 
        <li key={section}>
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