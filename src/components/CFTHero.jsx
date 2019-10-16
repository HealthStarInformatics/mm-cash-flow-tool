import React, { useContext} from 'react';
import { Link } from 'react-router-dom';

import { CFTContext } from "../App";


import "../styles/CFTHero.scss";

const CFTHero = (props) => {
    const state = useContext((CFTContext));

    return (
        <div className="cft-hero-wrapper">
            <span><i className="far fa-money-bill-alt"></i></span>
            <h1>CASH FLOW TOOL</h1>
            <h2>Income management for better outcomes</h2>
            <p className="tagline">Useful recommendations, based on your unique situation, to help improve your financial well-being</p>
            <Link to="cft/Overview">
                <button 
                    className="card-btn"
                    onClick={() => (state.update({currentSection: "Overview"}))}>GET STARTED</button>
            </Link>
        </div>

    )
}

export default CFTHero;