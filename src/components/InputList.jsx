import React from 'react';

import InputRow from './InputRow';

import '../styles/InputList.scss';

class InputList extends React.Component {
    constructor(props) {
        super(props);
        //this.state
    }

    render() {
        return (
            <div className="income-inputs-wrapper">
                <InputRow />
                <InputRow />
                <InputRow />
                <div>
                    <span 
                        className="add-row" 
                        role="img" 
                        aria-label="plus"
                        >
                    ➕
                    </span>
                </div>
                
     
            </div>

        )
    }
}

export default InputList;