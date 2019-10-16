import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { CFTContext } from "../App";

import { clearStorageAll } from '../hooks/storageServices';

import '../styles/Section.scss';


const Overview = (props) => {
    const state = useContext((CFTContext));
    //console.log("Overview: state", state.update);



    return (
        <div className="sub-section-wrapper">
            <div>current section id {state.currentSectionId}</div>
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
            <Link to={`/cft/${state.currentSection}`}>
                <button className="card-btn"
                 onClick={() => (state.update({currentSection: "Questions"}))}>Let's Add Your Data</button>
            </Link>
        </div>
    );
}

export default Overview;

