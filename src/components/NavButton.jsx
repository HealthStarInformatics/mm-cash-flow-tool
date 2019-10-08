import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NavButton.scss';

const NavButton = (props) => {
        return(
            <div className="nav-button-wrapper">
                <div>{props.next}</div>
                    <Link to={props.next}>
                        <button>NEXT</button>
                    </Link>
            </div>
        );
}

export default NavButton;