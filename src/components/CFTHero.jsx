import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/CFTHero.scss";

function CFTHero(props) {
    return(
        <div className="cft-hero-wrapper">
            <h1>CASH FLOW</h1>
            <h2>Income management for better outcomes</h2>
            <h3>Useful recommendations, based on your unique situation, to help improve your financial well-being</h3>
            <Link to="/CFT/income">
                <button className="get-started-button">GET STARTED</button>
            </Link>
        </div>

    )
}

export default CFTHero;