import React from "react";

import "../styles/IncomeForm.scss";

import CFTNav from './CFTNav';
import Overview from './Overview';
import Incomes from './Incomes';
import Expenses from './Expenses';
import Summary from './Summary';
import Recommendations from './Recommendations';
import IncomeStartingBalance from './IncomeStartingBalance';
import IncomeJobOne from './IncomeJobOne';
import IncomeJobTwo from './IncomeJobTwo';
import IncomeHousingSubsidy from './IncomeHousingSubsidy';
import IncomeSNAP from './IncomeSNAP';
import IncomeTANF from './IncomeTANF';
import IncomeOther from './IncomeOther';

import { IncomeQuestionsConsumer } from '../services/IncomeQuestionsProvider';


class IncomeForm extends React.Component {
    state = {
        currentQuestionIndex:0,
        income: {
            startingBalance: 0,
            jobOne:0,
            jobTwo:0,
            housingSubsidy:0,
            snap:0,
            tanf:0,
            other:0
        }
    }

    goToNextQuestion = () => {
        this.setState({
            currentQuestionIndex: this.state.currentQuestionIndex + 1
        })
    };


    render() {
        console.log('IncomeForm: state', this.state);
        console.log('IncomeForm: props', this.props);

        const currentQuestionIndex  = this.state.currentQuestionIndex;
        console.log('what is currenQI', currentQuestionIndex);

        // let comp;
        // if(currentQuestionIndex === 0) {
        //         comp = <IncomeStartingBalance />
        // } else if (currentQuestionIndex === 1){
        //     comp = <IncomeJobOne />;
        // } else if (currentQuestionIndex === 2){
        //     comp = <IncomeJobTwo />;
        // } else if (currentQuestionIndex === 3){
        //     comp = <IncomeHousingSubsidy />;
        // } else if (currentQuestionIndex === 4){
        //     comp = <IncomeSNAP />;
        // } else if (currentQuestionIndex === 5){
        //     comp = <IncomeTANF />;
        // } else if (currentQuestionIndex === 6){
        //     comp = <IncomeOther />;
        // } else {
        //     console.log('IncomeForm: this is a joke');
        // }
        // console.log('what is comp?', comp);
        return(
            <IncomeQuestionsConsumer>
                {({income}) => (
                    <div>
                        <p>income name {income.questions[1].name}</p>
                        {/* {comp} */}
                        <button onClick={this.goToNextQuestion}>
                            Next Question
                        </button>
                    </div> 
                )}
            </IncomeQuestionsConsumer>
               
        );
    }
}

export default IncomeForm;