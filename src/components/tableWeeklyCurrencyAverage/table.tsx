import React, { useMemo } from 'react';
import { HistoricalWeeklyCurrencyLastMonthI } from '../../ribs/appState/module';
import Strings from '../../resources/strings';

//page*
import TableRow from './tableRow';

interface TableWeeklyCurrencyAverageI {
    historicalWeeklyCurrencyLastMonth: Array<HistoricalWeeklyCurrencyLastMonthI>,
}

const TableWeeklyCurrencyAverage = React.memo(
    (props: TableWeeklyCurrencyAverageI): JSX.Element => {

    const { historicalWeeklyCurrencyLastMonth } = props;
    //Création d'un tableau de date à partir de l'object historicalWeeklyCurrencyLastMonth
    const dates = useMemo( () => historicalWeeklyCurrencyLastMonth.map( item => item.date ),[historicalWeeklyCurrencyLastMonth]);
    //Création d'un tableau de devise à partir de l'object historicalWeeklyCurrencyLastMonth
    const quotes = useMemo( () => historicalWeeklyCurrencyLastMonth.map( item => Object.entries(item.quotes) ),[historicalWeeklyCurrencyLastMonth]);

    //Création d'un tableau de composant TableRow
    const rows = useMemo( () => {
        let tableRows = [];
            quotes.map( ( quote, index ) =>
                tableRows.push(<TableRow key={index} date={dates[index]} firstCurrency={quote[0]} secondCurrency={quote[1]} />)
            );
        return tableRows;
    },[quotes,dates]);
        
        return(
            <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>{Strings.table.weeklyCurrencyAverage.date}</th>
                            <th>{Strings.table.weeklyCurrencyAverage.currency}</th>
                            <th>{Strings.table.weeklyCurrencyAverage.value}</th>
                            <th>{Strings.table.weeklyCurrencyAverage.currency}</th>
                            <th>{Strings.table.weeklyCurrencyAverage.value}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
        )
    }
);

export default TableWeeklyCurrencyAverage;