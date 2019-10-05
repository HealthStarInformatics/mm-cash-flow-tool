import React from 'react';

import "../styles/MainNav.scss";

function MainNav(props) {
    return (
        <nav className="main-nav-wrapper">
            <div>
                <h3>Digital Money Toolkit</h3>
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