import React from 'react';


import ToolNav from './ToolNav';

import '../styles/SubSection.scss';

const SummarySubSection = (props) => {
        return (
            <div className='sub-section-wrapper'>
                    <h1>Summary SubSection</h1>
                
                <ToolNav prev="/cft/Overview" next="/cft/RecommendationsSubSection" />
            </div>
        );
}

export default SummarySubSection;

