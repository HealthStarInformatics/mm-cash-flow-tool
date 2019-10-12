import React from 'react';

const SingleQuestion = (props) => {
    return (
        <div className='single-question'>
                <h2>{props.title}</h2>
                <p className="description">{props.description}</p>
                    <div>props.amount</div>
                <input 
                    className="input-values" 
                    type="number" 
                    name="starting-balance"
                    defaultValue="125" />
                <input type="submit" value="submit" />
                        
                    </div>
    );
}

export default SingleQuestion;