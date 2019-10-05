import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/CashFlowToolHome.scss";

function CashFlowToolHome(props) {
    return(
        <div className="cash-flow-tool-home-wrapper">
            <h1>CASH FLOW</h1>
            <h2>Income management for better outcomes</h2>
            <h3>Useful recommendations, based on your unique situation, to help improve your financial well-being</h3>
            <Link to="/cashflowtool/incomes">
                <button className="get-started-button">GET STARTED</button>
            </Link>
        </div>

    )
}

export default CashFlowToolHome;