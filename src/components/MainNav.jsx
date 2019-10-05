import React from 'react';

import "../styles/MainNav.scss";

function MainNav(props) {
    return (
        <div className="nav-wrapper">
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
            
           
        </div>
    );
}

export default MainNav;