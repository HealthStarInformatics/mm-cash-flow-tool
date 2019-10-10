import React from 'react';

import IncomeStartingBalance from './IncomeStartingBalance';
import IncomeJobOne from './IncomeJobOne';
import IncomeJobTwo from './IncomeJobTwo';
import IncomeHousingSubsidy from './IncomeHousingSubsidy';
import IncomeSNAP from './IncomeSNAP';
import IncomeTANF from './IncomeTANF';
import IncomeOther from './IncomeOther';

import '../styles/Section.scss';

class Incomes extends React.Component {
    
    // displayedSubSection(subsection)  {
    //     switch(subsection) {
    //         case 'Add Job One':
    //             return <IncomeJobOne />;
    //         case 'Add Job Two':
    //             return <IncomeJobTwo />;
    //         case 'Housing Subsidy':
    //             return <IncomeHousingSubsidy />;
    //         case 'SNAP':
    //             return <IncomeSNAP />;
    //         case 'TANF':
    //             return <IncomeTANF />;
    //         case 'Other':
    //             return <IncomeOther />;
    //         default:
    //             return <IncomeStartingBalance />;
    //     }
   // }
    

    render() {
        console.log('this.props.match in incomes', this.props);
        return (
            <div className='section-wrapper'>
                <IncomeJobOne />
            </div>
        );

    }
    
}

export default Incomes;

