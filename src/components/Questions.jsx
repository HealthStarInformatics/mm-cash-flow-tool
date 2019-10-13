import React, { useContext, useState } from "react";

import "../styles/Questions.scss";

import { saveToStorage } from '../hooks/storageServices';

import { QuestionsContext } from "../QuestionsContext";

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function Questions() {
    const [state,setState] = useContext(QuestionsContext);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [answers, setAnswers] = useState([]);
    const [input, setInput] = useState(0);

    const increment = () => {
        // add answers to answers array
        setAnswers((answers) => answers.concat({
            amount: input,
            type: state.questions[questionNumber].type,
            qName: state.questions[questionNumber].name,
            id: generateId()
        }))

        // save answers to local storage
        saveToStorage(state.questions[questionNumber].name, input)
        
        //go to next question
        setQuestionNumber((questionNumber) => questionNumber + 1);
        setInput('')
    }

    const decrement = () => setQuestionNumber((questionNumber) => questionNumber - 1);

    
     console.log("localStorage", localStorage );
     
        return (
                    <div className="question-wrapper">
                        <div>
                             <p className={state.questions[questionNumber].type === 'income' ? 'income' : 'expenses'}>{state.questions[questionNumber].type} Question</p>
                             <h2>{state.questions[questionNumber].name}</h2>
                             <p className="description">{state.questions[questionNumber].desc}</p>
                        </div>
                        <div>
                                     <input 
                                         type="number" 
                                         name={state.questions[questionNumber].name}
                                         value={input}
                                         className="input-values"
                                        //  onChange={e => (saveToStorage(state.questions[questionNumber].name, e.target.value))}
                                         onChange={(e) => setInput(e.target.value)}
                                         />
                                         <ul>
                                             {answers.map(({ type, amount, qName, id}) => (
                                                 <li key={id}>
                                                     <span>{type}:{qName}, {amount}</span>
                                                 </li>
                                             ))}
                                         </ul>
                         </div> 

                         <div>
                             <button onClick={decrement}>
                                     {questionNumber} Previous Question
                             </button>
                             <button onClick={increment}> 
                                 {questionNumber} Next Question
                             </button>
                        </div>
                </div>
             ); 
}

export default Questions;