import React, { useContext } from "react";

import "../styles/useQuestions.scss";

import { QuestionsContext } from '../services/QuestionsContext';

const UseQuestions = () => {
    const [state, setState] = useContext(QuestionsContext);

    
        return(
                    <div className="question-wrapper">
                        <div>
                            {/* <p className="question-type">{state.questions[currQ].type} Question</p> */}
                            <p className="question-type">{state.questions[state.currQ].type} Question</p>
                            <h2>{state.questions[state.currQ].name}</h2>
                            <p className="description">{state.questions[state.currQ].desc}</p>
                        </div>
                        <div>
                            <input 
                                className="input-values" 
                                type="number" 
                                name="starting-balance"
                                defaultValue={state.questions[state.currQ].amount} />

                            </div>
                        <div>
                        <button onClick={() => setState(state => ({...state, currQ: state.currQ - 1}))}>
                                {state.currQ} Previous Question
                            </button>
                            <button onClick={() => setState(state => ({...state, currQ: state.currQ + 1}))}>
                                {state.currQ} Next Question
                            </button>
                        </div>
                    </div>   
            );
}

export default UseQuestions;