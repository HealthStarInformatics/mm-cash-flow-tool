import React from 'react';
import { Link } from 'react-router-dom';

import { clearStorageAll } from '../hooks/storageServices';

import '../styles/Section.scss';



const Overview = (props) => {
    console.log('Overview: props', props);
        return (
            <div className="sub-section-wrapper">
                <div className="section-instructions">
                    <h3>Let's Create a Cash Flow Budget</h3>
                    <p className="tagline">A cash flow budget is all about tracking the timing of your income and expenses
                        to make sure you have enough from week to week.</p>
                </div>
                <div>What to do</div>
                <ul className="description">
                    <li>Enter your beginning balance for the week.</li>
                    <li>Add all of the income and benefits your receive that week.</li>
                    <li>Subtract all of your expenses for that week.</li>
                    <li>What's left is your ending balance.</li>
                    <li>Copy your ending balance for the week to the beginning balance of the next week..</li>
                </ul>
                <Link to="/cft/Questions">
                    <button className="card-btn" onClick={clearStorageAll}>Let's Add Your Data</button>
                </Link>
            </div>
        );
}

export default Overview;

