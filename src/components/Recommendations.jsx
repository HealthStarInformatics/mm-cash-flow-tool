import React from 'react';

import NavButton from './NavButton';

import '../styles/Recommendations.scss';

import RecommendationCard from './RecommendationCard';

class Recommendation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recommendationcards: [{
                title: "Debt Management",
                desc: "You have a loan payment.  Carrying credit card or loan debt can cost you more money over time.",
                subtitle:  "Repayment Strategies",
                subtitleDesc:"Here are strategies for taking control over your debt and choosing a strategy to pay it off.",
                buttonText: "LEARN HOW TO HANDLE DEBT"
            }, {
                title: "Investments",
                desc: "You've got an income surplus of $489.38.  Here are some resources to help put that money to work for you.",
                subtitle:  "Save for Retirement",
                subtitleDesc:"Run the numbers to see how you can better meet your retirement goals.",
                buttonText: "GO TO RETIREMENT CALENDAR"
            }]
        }
    }

    render() {

        const cards = this.state.recommendationcards.map((card, index) => 
            <li key={index}>
                <RecommendationCard {...card} />
            </li>
        );
        return(
            <div className='income-wrapper'>
                <div className="instructions">
                        <h1>Next Steps</h1>
                        <h3>Here are a few actionable items to help better
                            manage your weekly cash flow.</h3>
                </div>
                <ul className="recommendation-section">
                   {cards}
                </ul>
                
                <NavButton />
            </div>
        );
    }
}

export default Recommendation;

