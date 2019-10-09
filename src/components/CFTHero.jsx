import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/CFTHero.scss";

const CFTHero = () => {
    return (
        <div className="cft-hero-wrapper">
            <span><i className="far fa-money-bill-alt"></i></span>
            <h1>CASH FLOW</h1>
            <h2>Incomes management for better outcomes</h2>
            <p className="tagline">Useful recommendations, based on your unique situation, to help improve your financial well-being</p>
            <Link to="/CFT/Incomes">
                <button className="get-started-button">GET STARTED</button>
            </Link>
        </div>

    )
}

export default CFTHero;