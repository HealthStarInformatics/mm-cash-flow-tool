import React from 'react';

import '../styles/RecommendationCard.scss';

export default function RecommendationCard(props) {
    return(
        <div className="recommendation-card-wrapper">
            <h1>{props.title}</h1>
            <h3>{props.desc}</h3>
            <h2>{props.subtitle}</h2>
            <h3>{props.subtitleDesc}</h3>
            <button className="card-button">{props.buttonText}</button>
        </div>
    )

}
