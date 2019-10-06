import React from 'react';



import NavButton from './NavButton';

import '../styles/Income.scss';

import RecommendationCard from './RecommendationCard';

class Recommendation extends React.Component {
    constructor(props) {
        super(props)
        //this.state
    }

    render() {
        return(
            <div className='income-wrapper'>
                <div className="instructions">
                        <h1>Next Steps</h1>
                        <h3>Here are a few actionable items to help better
                            manage your weekly cash flow.</h3>
                </div>
                <div className="recommendation-section">
                    <RecommendationCard />
                    <RecommendationCard />
                </div>
                
                <NavButton />
            </div>
        );
    }
}

export default Recommendation;

