import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { API } from '../../ribs/appState/module';
import Strings from '../../resources/strings';

//page*
import TableRow from './tableRow';

interface TableCurrencyConvertedI {
    apiInitialized: API,
    dollarValue: number,
}

const TableCurrencyConverted = React.memo(
    (props: TableCurrencyConvertedI): JSX.Element => {

    const { apiInitialized, dollarValue } = props;
    //Création d'un tableau de devise à partir de l'object historicalWeeklyCurrencyLastMonth
    const quotes = useMemo( () => Object.entries(apiInitialized.quotes),[apiInitialized]);

    //Création d'un tableau de composant TableRow
    const rows = useMemo( () => {
        let tableRows = [];
            quotes.map( ( quote ) => 
                tableRows.push(<TableRow key={quote[0]} currency={quote[0]} value={parseFloat(quote[1])*dollarValue} />)
            );
        return tableRows;
    },[quotes,dollarValue]);
        
        return(
            <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>{Strings.table.currencyConverter.currency}</th>
                            <th>{Strings.table.currencyConverter.value}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
        )
    }
);

const mapStateToProps = (state) => ({ 
    dollarValue: state.currencyConverter.dollarValue,
});

export default connect(mapStateToProps, null)(TableCurrencyConverted);