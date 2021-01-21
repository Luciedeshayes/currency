import React from 'react';
import { connect } from 'react-redux';
import MainLoading from '../../components/mainLoading/mainLoading';
import TableWeeklyCurrencyAverage from '../../components/tableWeeklyCurrencyAverage/table';
import { HistoricalWeeklyCurrencyLastMonthI } from '../../ribs/appState/module';

interface WeeklyCurrencyAveragePageProps {
    historicalWeeklyCurrencyLastMonth: Array<HistoricalWeeklyCurrencyLastMonthI>,
}

const WeeklyCurrencyAverage = (props: WeeklyCurrencyAveragePageProps): JSX.Element => {
    const { historicalWeeklyCurrencyLastMonth } = props;


    return (
        <React.Suspense fallback={<MainLoading />}>
            <div className="container">
                <TableWeeklyCurrencyAverage historicalWeeklyCurrencyLastMonth={historicalWeeklyCurrencyLastMonth}/>
            </div>            
        </React.Suspense>
    );
};

const mapStateToProps = (state) => ({ 
    historicalWeeklyCurrencyLastMonth: state.appState.historicalWeeklyCurrencyLastMonth
})

export default connect(mapStateToProps, null)(WeeklyCurrencyAverage);
