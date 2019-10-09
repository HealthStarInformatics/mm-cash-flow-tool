import React from 'react';
import { Link } from 'react-router-dom';



import '../styles/CFTNav.scss';

class CFTNav extends React.Component {
    constructor(props) {
        super(props);
    }

    


    render() {
        return(
            <div>
                <div>ok, this is like the tool nav, not the app nav</div>
                <nav className="cft-nav-wrapper">
                    <ul>
                        <li className="incomes">
                            <Link to="/CFT/Incomes">Incomes</Link>
                        </li>
                        
                    </ul>
                </nav>
                
            </div>

        );

    }

    
}

export default CFTNav;