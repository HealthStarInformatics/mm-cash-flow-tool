import React from 'react';

import ToolNav from './ToolNav';

import '../styles/Recommendations.scss';

import ToolCard from './ToolCard';

class Recommendation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ToolCards: [{
                title: "Debt Management",
                desc: "You have a loan payment.  Carrying credit card or loan debt can cost you more money over time.",
                subtitle:  "Repayment Strategies",
                subtitleDesc:"Here are strategies for taking control over your debt and choosing a strategy to pay it off.",
                buttonText: "LEARN HOW TO HANDLE DEBT"
            }, {
                title: "Investments",
                desc: "You've got an Incomes surplus of $489.38.  Here are some resources to help put that money to work for you.",
                subtitle:  "Save for Retirement",
                subtitleDesc:"Run the numbers to see how you can better meet your retirement goals.",
                buttonText: "GO TO RETIREMENT CALENDAR"
            }]
        }
    }

    render() {

        const cards = this.state.ToolCards.map((card, index) => 
            <li key={index}>
                <ToolCard {...card} />
            </li>
        );
        return(
            <div className='Incomes-wrapper'>
                <div className="instructions">
                        <h1>Next Steps</h1>
                        <p className="tagline">Here are a few actionable items to help better
                            manage your weekly cash flow.</p>
                </div>
                <ul className="recommendation-section">
                   {cards}
                </ul>
                
                <ToolNav back="/CFT/Summary" />
            </div>
        );
    }
}

export default Recommendation;

