import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ToolNav.scss';

const ToolNav = (props) => {
        return(
            <div className="tool-nav-wrapper"> 
                    {props.back ? (
                        <div>
                            <Link to={props.back}>
                                <button>BACK</button>
                            </Link>
                        </div>
                    ) : (
                        <div>
                            there is no props.back
                        </div>
                    )}
                    {props.next ? (
                        <div>
                            <Link to={props.next}>
                            <button>NEXT</button>
                            </Link>
                        </div>
                        ): (
                        <div>
                            there is no props.next.  Where will this go?
                        </div>
                    )} 
            </div>
        );
}

export default ToolNav;