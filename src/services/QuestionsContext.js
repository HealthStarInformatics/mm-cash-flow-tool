import React, { useState } from 'react';

// setup an initial context
// const QuestionsContext = React.createContext();
const QuestionsContext = React.createContext([{}, () => {}]);

// create an exporable consumer that can be injected into components
export const QuestionsConsumer = QuestionsContext.Consumer;

// create the provider using a traditional React.Component class
// class QuestionsProvider extends React.Component {
    const QuestionsProvider = (props) => {
    // state = {
        const [state, setState] = useState({
            currQ: 1,
            questions: [
                {
                    id:0,
                    type: "Income",
                    name:"Starting Balance",
                    title:"What is your starting balance?",
                    desc:"Your starting balance is a total of your cash, prepaid card, and account balances.",
                    amount: 100
                },
                {
                    id:1,
                    type: "Income",
                    name: "Job One",
                    title:"Do you receive income from a job?",
                    desc:"Your starting balance is a total of your cash, prepaid card, and account balances.",
                    amount: 125
                },
                {
                    id:2,
                    type: "Income",
                    name: "Job Two",
                    title:"Do you receive income from a Second Job?",
                    desc:"Description for Job Two",
                    amount: 150
                },
                {
                    id:3,
                    type: "Income",
                    name: "SNAP",
                    title:"Do you participate in SNAP",
                    desc:"SNAP is ......",
                    amount: 175
                },
                {
                    id:4,
                    type: "Income",
                    name: "TANF",
                    title:"Do you participate in TANF",
                    desc:"TANF is ....",
                    amount: 0
                },
                {
                    id:5,
                    type: "Income",
                    name: "Housing Subsidy",
                    title:"Do you receive a Housing Subsidy",
                    desc:"A Housing Subsidy is ....",
                    amount: 0
                },
                {
                    id:6,
                    type: "Income",
                    name: "Other Income",
                    title:"Do you receive any other type of income",
                    desc:"This could be occasional or freelance jobs....",
                    amount: 0
                },
                {
                    id:7,
                    type: "Expense",
                    name:"Cellphone",
                    title:"Cellphone",
                    desc:"Cellphone description",
                    amount: 100
                },
                {
                    id:8,
                    type: "Expense",
                    name: "Debt Payment",
                    title:"Debt Payment",
                    desc:"Debt Payment description",
                    amount: 125
                },
                {
                    id:9,
                    type: "Expense",
                    name: "Eating Out",
                    title:"Eating Out",
                    desc:"Eating Out description",
                    amount: 150
                },
                {
                    id:10,
                    type: "Expense",
                    name: "Education and Childcare",
                    title:"Education and Childcare",
                    desc:"Education and Childcare description",
                    amount: 175
                },
                {
                    id:11,
                    type: "Expense",
                    name: "Entertainment",
                    title:"Entertainment",
                    desc:"Entertainment description",
                    amount: 0
                },
                {
                    id:12,
                    type: "Expense",
                    name: "Groceries and Other Supplies",
                    title:"Groceries and Other Supplies",
                    desc:"Groceries and Other Supplies description",
                    amount: 0
                },
                {
                    id:13,
                    type: "Expense",
                    name: "Health Expenses",
                    title:"Health Expenses",
                    desc:"Health Expenses description",
                    amount: 0
                },
                {
                    id:14,
                    type: "Expense",
                    name:"Helping Others",
                    title:"Helping Others",
                    desc:"Helping Others description",
                    amount: 100
                },
                {
                    id:15,
                    type: "Expense",
                    name: "Housing and Utilities",
                    title:"Housing and Utilities",
                    desc:"Housing and Utilities description.",
                    amount: 125
                },
                {
                    id:16,
                    type: "Expense",
                    name: "Pets",
                    title:"Pets",
                    desc:"Pets description",
                    amount: 150
                },
                {
                    id:17,
                    type: "Expense",
                    name: "Emergency Fund",
                    title:"Savings for Emergency Fund",
                    desc:"Emergency Fund Description",
                    amount: 175
                },
                {
                    id:18,
                    type: "Expense",
                    name: "Entertainment",
                    title:"Entertainment",
                    desc:"Entertainment description",
                    amount: 0
                },
                {
                    id:19,
                    type: "Expense",
                    name: "Savings for Goals",
                    title:"Savings for Goals",
                    desc:"like education or retirement",
                    amount: 0
                },
                {
                    id:20,
                    type: "Expense",
                    name: "Transportation",
                    title:"Transportation",
                    desc:"Transportation description.",
                    amount: 0
                }
            ]
        });

    // render() {
        return (
            <QuestionsContext.Provider value={[state, setState]}>
            
                {props.children}
            </QuestionsContext.Provider>
        );
    }
// }

// export default QuestionsProvider;
export { QuestionsContext, QuestionsProvider };