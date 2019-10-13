import React, { useContext, useState } from "react";

import "../styles/Questions.scss";

import { saveToStorage, clearStorageAll } from '../hooks/storageServices';

// import { QuestionsContext } from "../QuestionsContext";

function Questions() {
    // const [state,setState] = useContext(QuestionsContext);
    const [amount, setAmount] = useState('Missy Initial Amount');

    const toJoanne = () => setAmount('Joanne Amount');
    const toMissy = () => setAmount['Missy Initial Amount'];

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     console.log('made it to handlechange', e.target.value);
    // }
   
        
    // console.log("testKey", state.testKey);
    // console.log("localStorage", localStorage );
    // clearStorageAll();
        return (
                    <div className="question-wrapper">
                        <div className={amount}>
                            {amount === 'Missy Initial Amount'
                                ? <button onClick={toJoanne}>Joanne</button>
                                : <button onClick={toMissy}>Missy</button>
                                }
                        </div>
                       
                         <div>
                             <p className="state.questions[state.currQ].type">{state.questions[state.currQ].type} Question</p>
                             <h2>{state.questions[state.currQ].name}</h2>
                             <p className="description">{state.questions[state.currQ].desc}</p>
                        </div>
                        <div>
                             <form
                                 id="input-form"
                                 onSubmit={handleChange}
                                 className="input-form"
                                 autocomplete="off"
                                 >
                                    
                                     <input 
                                         type="number" 
                                         name={state.questions[state.currQ].name}
                                         className="input-values"
                                         onChange={e => (saveToStorage(state.questions[state.currQ].name, e.target.value))}
                                         />

                            </form>
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

export default Questions;