import React from 'react';


import ToolNav from './ToolNav';

import '../styles/SubSection.scss';

const RecommendationSubSection = (props) => {
        return (
            <div className='sub-section-wrapper'>
                    <h1>Recommendations SubSection</h1>
                
                <ToolNav prev="/cft/Overview" next="/cft/Overview" />
            </div>
        );
}

export default RecommendationSubSection;

