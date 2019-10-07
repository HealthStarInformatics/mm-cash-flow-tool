import React from 'react';

import "../styles/OtherTools.scss";

import ToolCard from './ToolCard';

class OtherTools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ToolCards: [{
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
            }, {
                title: "Car Loan Repayment",
                desc: "Calculate monthly payment schedules to help pay down your car loan.",
                subtitle:  "Car Loan Subtitle",
                subtitleDesc:"Carloan subtitle description.",
                buttonText: "UNDERSTAND YOUR CAR LOAN"
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
            <div className="other-tools-wrapper">
                <h1>Also in the Toolkit</h1>
                <h3>Life comes at you fast.  We're here to help
                    you plan for the journey ahead.  DMDT offers
                    more tools to help you react your financial destination.
                </h3>
                <ul>
                    {cards}
                </ul>
            </div>

        );
    }
}

export default OtherTools;