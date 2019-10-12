import React from 'react';


import ToolNavOLD from './ToolNavOLD';

import '../styles/SubSection.scss';

const SummarySubSection = (props) => {
        return (
            <div className='sub-section-wrapper'>
                    <h1>Summary SubSection</h1>
                
                <ToolNavOLD prev="/cft/Overview" next="/cft/RecommendationsSubSection" />
            </div>
        );
}

export default SummarySubSection;

