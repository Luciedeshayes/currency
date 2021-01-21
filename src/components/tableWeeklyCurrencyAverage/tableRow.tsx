import React from 'react';

export interface TableRowI {
    firstCurrency: Array<string>,
    secondCurrency: Array<string>,
    date: string,
}

const Tablerow = React.memo(
    (props: TableRowI): JSX.Element => {

    const { date, firstCurrency, secondCurrency } = props;

        return(
            <tr>
                <td>{date}</td>
                <td>{firstCurrency[0].slice(3, 6)}</td>
                <td>{parseFloat(firstCurrency[1]).toFixed(3)}</td>
                <td>{secondCurrency[0].slice(3, 6)}</td>
                <td>{parseFloat(secondCurrency[1]).toFixed(3)}</td>
            </tr>
        )
    }
);

export default Tablerow;