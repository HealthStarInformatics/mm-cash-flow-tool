import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Questions.scss';

const ToolNavOLD = (props) => {
        return(
            <div className="tool-nav-wrapper"> 
                    {props.prev ? (
                        <div>
                            <Link to={props.prev}>
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

export default ToolNavOLD;