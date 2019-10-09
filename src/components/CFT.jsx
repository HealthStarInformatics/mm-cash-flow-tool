import React from 'react';

import CFTNav from './CFTNav';
import Incomes from './Incomes';
import Expenses from './Expenses';
import Summary from './Summary';
import Recommendations from './Recommendations';

class CFT extends React.Component {

    displayedSection(section)  {
        switch(section) {
            case 'Expenses':
                return <Expenses />;
            case 'Summary':
                return <Summary />;
            case 'Recommendations':
                return <Recommendations />;
            default:
                return <Incomes />;
        }
    }

    render() {
        let section = this.props.match.params.section;
        
        return (
            <main id="cash-flow-tool">
                <div>{section}</div>
                <h1>Cash Flow Tool</h1>
                  <CFTNav activeSection={section} /> 
                  {this.displayedSection(section)}
            </main>

        );
    }
}

export default CFT;