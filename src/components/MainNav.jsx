import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/MainNav.scss";

function MainNav(props) {
    return (
        <nav className="main-nav-wrapper">
            <div>
                <h3>
                    <Link to="/">Digital Money Toolkit</Link>
                </h3>
            </div>
            <div>
                <button className="toggle-button">
                    <div className="toggle-button_line"/>
                    <div className="toggle-button_line"/>
                    <div className="toggle-button_line"/> 
                </button>
            </div> 
        </nav>
    );
}

export default MainNav;