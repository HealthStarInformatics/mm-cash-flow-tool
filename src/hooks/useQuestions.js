import React, { useContext } from "react";
import { QuestionsContext } from "../QuestionsContext";

const useQuestions = () => {
    const [state, setState] = useContext(QuestionsContext);

    function clearStorageAll() {
        ["cft-incomes", "cft-expenses", "cft-period"].forEach(key => 
            clearStorageItem(key)
        );
    };
    
    function clearStorageItem(key) {
        localStorage.removeItem(key);
    };
    
    function saveToStorage(key, value) {
        console.log('made it to saveToStorage');
        return localStorage.setItem(key, JSON.stringify(value));
    };
    
    function getFromStorage(key){ 
        return JSON.parse(localStorage.getItem(key));
    }

    function goToNextQuestion() {
        console.log('gottonextquest');

    }

    
    return (
        clearStorageAll,
        clearStorageItem,
        saveToStorage,
        getFromStorage
    );
}

export default useQuestions;