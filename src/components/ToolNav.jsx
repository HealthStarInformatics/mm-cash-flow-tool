import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ToolNav.scss';

const ToolNav = (props) => {
    console.log('props.next is ', props.next);
    console.log('props.back is ', props.back);
        return(
            <div className="tool-nav-wrapper">
                {props.back ? (
                    <Link to={props.back}>
                        <button>Back</button>
                    </Link>
                ) : (
                    <div>there is no props.back</div>
                )}

                    
                    <Link to={props.next}>
                        <button>NEXT</button>
                    </Link>
            </div>
        );
}

export default ToolNav;