import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/MainNav.scss";

const MainNav = () => {
    return (
        <nav className="main-nav-wrapper">
            <div className='logo'>
                <span><i className="far fa-money-bill-alt"></i></span>
                <p className="link-description">
                    <Link to="/">Digital Money Toolkit</Link>
                </p>
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