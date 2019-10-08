import React from 'react';

import '../styles/InputRow.scss';

const InputRow = () => {
        return (
            <div className="input-row-wrapper">
                <input type="number" name="Income Amount" min="0" size="15" placeholder="Income Amount" />
                <select name="duration-type">
                    <option value="" default selected>Type</option>
                    <option value="hourly">Hourly</option>
                    <option value="one-time">One Time</option>
                    <option value="bi-weekly">Bi-Weekly</option>
                    <option value="twice-monthly">Twice Monthly</option>
                    <option value="monthly">Monthly</option>
                </select>
                <span className="trash" role="img" aria-label="trashbin">🗑</span>
            </div>
        );
}

export default InputRow;