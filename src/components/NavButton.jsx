import React from 'react';
import Link from 'react-router-dom';

import '../styles/NavButton.scss';

class NavButton extends React.Component {
    constructor(props) {
        super(props);
        //this.state
    }

    render() {
        return(
            <div className="nav-button-wrapper">
                <button>NEXT</button>
            </div>
            
        )
    }
}

export default NavButton;