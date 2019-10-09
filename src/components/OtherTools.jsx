import React from 'react';

import "../styles/OtherTools.scss";

import ToolCard from './ToolCard';
import {toolOptions} from '../configuration/toolOptions';

class OtherTools extends React.Component {

    render() {
        const cards = toolOptions.map((card, index) => 
            <li key={index}>
                <ToolCard {...card} />
            </li>
        );
        return(
            <div className="other-tools-wrapper">
                <div><i className='fas fa-car-alt'></i></div>
                <h1>Also in the Toolkit</h1>
                <p className="description">Life comes at you fast.  We're here to help
                    you plan for the journey ahead.  DMDT offers
                    more tools to help you react your financial destination.
                </p>
                <ul>
                    {cards}
                </ul>
            </div>

        );
    }
}

export default OtherTools;