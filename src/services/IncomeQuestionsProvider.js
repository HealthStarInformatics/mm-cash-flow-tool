import React, { Component } from 'react';

// setup an initial context
const IncomeQuestionsContext = React.createContext();

// create an exporable consumer that can be injected into components
export const IncomeQuestionsConsumer = IncomeQuestionsContext.Consumer;

// create the provider using a traditional React.Component class
class IncomeQuestionsProvider extends Component {
    state = {
            income: {
                id:"income",
                name: "Income",
                questions: [
                     {
                        id:0,
                        name:"Starting Balance",
                        title:"What is your starting balance?",
                        desc:"Your starting balance is a total of your cash, prepaid card, and account balances.",
                        amount: 0
                    },
                    {
                        id:0,
                        name: "Job One",
                        title:"Do you receive income from a job?",
                        desc:"Your starting balance is a total of your cash, prepaid card, and account balances.",
                        amount: 0
                    },
                    {
                        id:0,
                        name: "Job Two",
                        title:"Do you receive income from a Second Job?",
                        desc:"Your starting balance is a total of your cash, prepaid card, and account balances.",
                        amount: 0
                    },
                    {
                        id:0,
                        name: "SNAP",
                        title:"Do you participate in SNAP",
                        desc:"Your starting balance is a total of your cash, prepaid card, and account balances.",
                        amount: 0
                    },
                    {
                        id:0,
                        name: "TANF",
                        title:"Do you participate in TANF",
                        desc:"Your starting balance is a total of your cash, prepaid card, and account balances.",
                        amount: 0
                    },
                    {
                        id:0,
                        name: "Housing Subsidy",
                        title:"Do you receive a Housing Subsidy",
                        desc:"Your starting balance is a total of your cash, prepaid card, and account balances.",
                        amount: 0
                    },
                    {
                        id:0,
                        name: "Other Income",
                        title:"Do you receive any other type of income",
                        desc:"Your starting balance is a total of your cash, prepaid card, and account balances.",
                        amount: 0
                    }
                ]
            }
        };


    render() {
        return (

            // value prop is where we define what values
            // that are accessible to consumer components
            <IncomeQuestionsContext.Provider value={this.state}>
                {this.props.children}
            </IncomeQuestionsContext.Provider>
        );
    }
}

export default IncomeQuestionsProvider;