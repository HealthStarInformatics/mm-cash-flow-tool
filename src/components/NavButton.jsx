import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NavButton.scss';

export default function NavButton(props) {
        
        return(
            <div className="nav-button-wrapper">
                <div>{props.next}</div>
                    <Link to={props.next}>
                        <button>NEXT</button>
                    </Link>

            </div>
            
        );
    }