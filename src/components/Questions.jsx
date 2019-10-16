import React, { useContext, useState } from "react";

import "../styles/Questions.scss";

import { CFTContext } from "../App";

import { saveToStorage } from "../hooks/storageServices";

import QuestionList from "../QuestionList";

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function Questions() {
    const state = useContext((CFTContext));
    const [questionNumber, setQuestionNumber] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [input, setInput] = useState(0);

    let someProperty = {...state.balances[questionNumber]}

    const setFieldValue = (e) => {
        e.preventDefault();
        let balanceKey = QuestionList[questionNumber].name;
        state.update({ balances: {...state.balances, [balanceKey]:e.target.value} });
        console.log('state.balances', state.balances);
    }

    const increment = () => {
        // add answers to answers array
        setAnswers((answers) => answers.concat({
            amount: input,
            type: QuestionList[questionNumber].type,
            qName: QuestionList[questionNumber].name,
            id: generateId()
        }))
        setInput('7777777')
        //go to next question
        setQuestionNumber((questionNumber) => questionNumber + 1);

        
    }

    const decrement = () => setQuestionNumber((questionNumber) => questionNumber - 1);
     
        return (
                    <div className="question-wrapper">
                        <div>
                             <p className={QuestionList[questionNumber].type === 'income' ? 'income' : 'expenses'}>{QuestionList[questionNumber].type} Question</p>
                             <h2>{QuestionList[questionNumber].title}</h2>
                             <p className="description">{QuestionList[questionNumber].desc}</p>
                        </div>
                        <div>
                                     <input 
                                        type="number" 
                                        name={QuestionList[questionNumber].name}
                                        defaultValue={state.balances.}
                                        className="input-values"
                                        onChange={(setFieldValue)}
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