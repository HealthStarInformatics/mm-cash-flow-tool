import React from 'react';

import '../styles/ToolCard.scss';

const ToolCard = (props) => {
    return(
        <div className="card-wrapper">
            <span>{props.img}</span>
            <h1>{props.title}</h1>
            <p className="tagline">{props.desc}</p>
            <h2>{props.subtitle}</h2>
            <p className="description">{props.subtitleDesc}</p>
            <button className="card-btn">{props.buttonText}</button>
        </div>
    )

}

export default ToolCard;
