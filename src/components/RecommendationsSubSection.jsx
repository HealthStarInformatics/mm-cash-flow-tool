import React from 'react';


import ToolNavOLD from './ToolNavOLD';

import '../styles/SubSection.scss';

const RecommendationSubSection = (props) => {
        return (
            <div className='sub-section-wrapper'>
                    <h1>Recommendations SubSection</h1>
                
                <ToolNavOLD prev="/cft/Overview" next="/cft/Overview" />
            </div>
        );
}

export default RecommendationSubSection;

